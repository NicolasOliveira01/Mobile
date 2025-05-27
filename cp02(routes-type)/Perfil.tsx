import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define as rotas do aplicativo
type RootStackParamList = {
  Home: undefined;
  Perfil: undefined;
  Detalhes: undefined;
};

// Define as props da tela Profile
type PerfilProps = NativeStackScreenProps<RootStackParamList, 'Perfil'>;

export default function Perfil({ navigation }: PerfilProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao seu perfil!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Home')}
      >
        <Text style={styles.buttonText}>Ir para Home</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  button: {
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
});