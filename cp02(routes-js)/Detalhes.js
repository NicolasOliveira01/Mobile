import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Perfil() {
  
    const navigation = useNavigation();
  
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Esta é a tela de Detalhes.</Text>
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