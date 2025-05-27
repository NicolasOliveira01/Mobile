import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define as rotas do aplicativo
type RootStackParamList = {
  Home: undefined;
  Perfil: undefined;
  Detalhes: undefined;
};

// Define as props da tela Home
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: HomeProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo à tela inicial!</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Perfil')}
        >
            <Text style={styles.buttonText}>Ir para Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Detalhes')}
        >
            <Text style={styles.buttonText}>Ir para Detalhes</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa', // Cor de fundo clara
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});