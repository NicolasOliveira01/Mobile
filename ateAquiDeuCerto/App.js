import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home'
import Bairro from './screens/Bairro'
import TempoEnergia from './screens/TempoEnergia'
import Impactos from './screens/Impactos'
import Recomendacoes from './screens/Recomendacoes'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Bairro" component={Bairro} />
        <Stack.Screen name="TempoEnergia" component={TempoEnergia} />
        <Stack.Screen name="Impactos" component={Impactos} />
        <Stack.Screen name="Recomendacoes" component={Recomendacoes} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
