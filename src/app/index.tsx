import NavBar from '@/components/NavBar';
import { Ionicons } from '@expo/vector-icons';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';

import { colors } from '../constants/COLORS';
import { db } from '../services/firebase';
import { styles } from '../styles/CardapioStyles';

const weekDays = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];

function MenuMeal({ meal }: { meal: any }) {
  const [favoriteMap, setFavoriteMap] = useState<Record<string, boolean>>({});

  const toggleFavorite = (key: string) => {
    setFavoriteMap((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <View style={styles.mealCard}>
      <View style={styles.mealHeader}>
        <Ionicons name="restaurant-outline" size={20} color={colors.primary} />
        <Text style={styles.mealHeaderText}>{meal.type}</Text>
      </View>

      <View style={styles.tableWrapper}>
        {/* COLUNA ESQUERDA FIXA */}
        <View style={styles.fixedColumn}>
          <View style={styles.labelHeaderCell} />
          {meal.rows.map((row: any, rowIndex: number) => (
            <View key={`fixed-${meal.type}-${rowIndex}`} style={styles.labelCell}>
              <Text style={styles.labelText}>{row.label}</Text>
            </View>
          ))}
        </View>

        {/* COLUNAS DIREITAS COM SCROLL */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces={false}>
          <View>
            <View style={styles.tableHeaderRow}>
              {weekDays.map((day) => (
                <View key={`${meal.type}-${day}`} style={styles.dayHeaderCell}>
                  <Text style={styles.dayHeaderText}>{day}</Text>
                </View>
              ))}
            </View>

            {meal.rows.map((row: any, rowIndex: number) => (
              <View key={`scroll-${meal.type}-${rowIndex}`} style={styles.tableRow}>
                {row.cells.map((cell: any, index: number) => {
                  const key = `${meal.type}-${row.label}-${index}`;
                  const isFavorite = !!favoriteMap[key];
                  const allergens = Array.isArray(cell.allergens) ? cell.allergens : [];

                  return (
                    <View key={key} style={styles.mealCell}>
                      <View style={styles.cellContent}>
                        {/* numberOfLines previne que textos gigantes estraguem a altura */}
                        <Text style={styles.mealText} numberOfLines={5}>
                          {cell.name}
                        </Text>

                        <View style={styles.allergenRow}>
                          {allergens.map((item: string) => (
                            <View
                              key={`${key}-${item}`}
                              style={[
                                styles.allergenBadge,
                                item.toLowerCase().includes('leite') ? styles.leiteBadge : styles.ovoBadge,
                              ]}
                            >
                              <Text style={styles.allergenText}>
                                {item.toLowerCase().includes('leite') ? 'L' : 'O'}
                              </Text>
                            </View>
                          ))}
                        </View>
                      </View>

                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => toggleFavorite(key)}
                        style={styles.favoriteButton}
                      >
                        <Ionicons
                          name={isFavorite ? 'heart' : 'heart-outline'}
                          size={14}
                          color={isFavorite ? '#ff5a5f' : '#7b8393'}
                        />
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <Ionicons name="time-outline" size={16} color={colors.primary} />
        <Text style={styles.footerText}>{meal.updatedAt}</Text>
      </View>
    </View>
  );
}

export default function CardapioScreen() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [meals, setMeals] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCardapio = async () => {
    setIsLoading(true);
    try {
      const docRef = doc(db, "cardapios", "atual");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setMeals(data.meals || []);
      } else {
        console.log("Nenhum cardápio encontrado na base de dados!");
        setMeals([]);
      }
    } catch (error) {
      console.error("Erro ao buscar cardápio:", error);
      Alert.alert("Erro", "Não foi possível carregar o cardápio. Verifique a sua ligação à internet.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCardapio();
  }, []);

  return (
    <View style={[styles.page, { flexDirection: isMobile ? 'column' : 'row' }]}>
      
      {!isMobile && <NavBar />}

      {isMobile && isMenuOpen && (
        <View style={styles.mobileMenuOverlay}>
          <NavBar />
          <TouchableOpacity
            style={styles.overlayBackground}
            onPress={() => setIsMenuOpen(false)}
            activeOpacity={1}
          />
        </View>
      )}

      <View style={{ flex: 1 }}>
        {isMobile && (
          <View style={styles.mobileHeader}>
            <View style={styles.brandWrap}>
              <View style={styles.brandTextWrap}>
                <Text style={styles.brandTitle}>Smart RU</Text>
                <Text style={styles.brandSubtitle}>Sem Desperdício</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => setIsMenuOpen(true)}>
              <Ionicons name="menu" size={32} color={colors.primaryDark} />
            </TouchableOpacity>
          </View>
        )}

        <ScrollView
          style={styles.mainScrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View style={styles.titleBlock}>
              <Text style={styles.title}>Cardápio da Semana</Text>
              <Text style={styles.subtitle}>Confira as refeições disponíveis esta semana</Text>
            </View>

          </View>

          {isLoading ? (
            <ActivityIndicator size="large" color={colors.primary} style={{ marginTop: 60 }} />
          ) : meals.length === 0 ? (
            <Text style={{ textAlign: 'center', marginTop: 40, color: colors.textSecondary }}>
              O cardápio desta semana ainda não foi publicado.
            </Text>
          ) : (
            meals.map((meal) => (
              <MenuMeal key={meal.type} meal={meal} />
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
}