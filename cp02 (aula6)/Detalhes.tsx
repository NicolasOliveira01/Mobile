import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define as rotas do aplicativo
type RootStackParamList = {
  Home: undefined;
  Perfil: undefined;
  Detalhes: undefined;
};

// Define as props da tela Home
type DetalhesProps = NativeStackScreenProps<RootStackParamList, 'Detalhes'>;

export default function Detalhes({ navigation }: DetalhesProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esta é a tela de Detalhes.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
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
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
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