import { router } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from '../styles/NotFoundStyles';

const logo = require('../assets/logo.jpg');

export default function NotFoundPage() {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrap}>
        <Image source={logo} style={styles.logoImage} resizeMode="contain" />
      </View>

      <Text style={styles.code}>404</Text>
      <Text style={styles.title}>Página não encontrada</Text>
      <Text style={styles.subtitle}>Essa página não existe ou foi removida. Volte para o início.</Text>

      <Pressable style={styles.button} onPress={() => router.push('/')}>
        <Text style={styles.buttonText}>Ir para o início</Text>
      </Pressable>
    </View>
  );
}
