import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  
    const navigation = useNavigation();
  
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo à tela inicial!</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.replace('Perfil')}
        >
            <Text style={styles.buttonText}>Ir para Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.replace('Detalhes')}
        >
            <Text style={styles.buttonText}>Ir para Detalhes</Text>
        </TouchableOpacity>
    </View>
  );
}
// também da para usar o navigation.navigate 

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