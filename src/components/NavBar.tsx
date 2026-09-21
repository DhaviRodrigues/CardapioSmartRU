import { 
  Calendar, 
  Gift, 
  History, 
  LayoutDashboard, 
  Lock, 
  LogOut, 
  User, 
  UtensilsCrossed 
} from 'lucide-react-native';
import { router } from 'expo-router';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../constants/COLORS';
import { styles } from '../styles/NavBarStyles';

const logo = require('../assets/logo.jpg');

export default function NavBar() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.shell}>
        <View style={styles.headerBar}>
          <View style={styles.brandWrap}>
            <Image source={logo} style={styles.logoImage} resizeMode="contain" />
            <View style={styles.brandTextWrap}>
              <Text style={styles.brandTitle}>Smart RU</Text>
              <Text style={styles.brandSubtitle}>Sem Desperdício</Text>
            </View>
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.userCard}>
            <Text style={styles.userName}>Dhavi</Text>
            <Text style={styles.userRole}>Estudante</Text>
          </View>

          <TouchableOpacity activeOpacity={0.8} onPress={() => router.push('/')} style={styles.menuItemButton}>
            <View style={styles.menuItemContent}>
              <LayoutDashboard size={18} color={colors.text} />
              <Text style={styles.menuText}>Início</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} onPress={() => router.push('/')} style={styles.menuItemButton}>
            <View style={styles.menuItemContent}>
              <Calendar size={18} color={colors.text} />
              <Text style={styles.menuText}>Agendar</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} onPress={() => router.push('/')} style={styles.menuItemButton}>
            <View style={styles.menuItemContent}>
              <History size={18} color={colors.text} />
              <Text style={styles.menuText}>Histórico</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.push('/')}
            style={[styles.menuItemButton, styles.activeMenuItemButton]}
          >
            <View style={styles.menuItemContent}>
              <UtensilsCrossed size={18} color={colors.white} />
              <Text style={[styles.menuText, styles.activeMenuText]}>Cardápio da Semana</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} onPress={() => router.push('/')} style={styles.menuItemButton}>
            <View style={styles.menuItemContent}>
              <Gift size={18} color={colors.text} />
              <Text style={styles.menuText}>Meu voucher</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} onPress={() => router.push('/')} style={styles.menuItemButton}>
            <View style={styles.menuItemContent}>
              <User size={18} color={colors.text} />
              <Text style={styles.menuText}>Perfil</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} onPress={() => router.push('/')} style={styles.menuItemButton}>
            <View style={styles.menuItemContent}>
              <Lock size={18} color={colors.text} />
              <Text style={styles.menuText}>Alterar senha</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.logoutButton} activeOpacity={0.8} onPress={() => router.push('/')}>
            <LogOut size={18} color={colors.danger} />
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}