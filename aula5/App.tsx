import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tarefa from './Tarefa';

export default function App() {
  return (
    <View style={styles.container}>
      <Tarefa descricao='Descrição' titulo='título' lido={true}/>
      <StatusBar style="auto" />
    </View>
  );
}
// a key dentro da Tarefa é opcional 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
