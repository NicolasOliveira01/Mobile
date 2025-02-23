import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}> 
      {/* SafeAreaView adiciona o padding na parte de cima por causa do Iphone, mas pode ser o View  */}
      <Text selectable={true}>Open up App.js to start working on your app!</Text>
      {/* texto sempre dentro do Text */}
      {/* <TextInput 
        placeholder='Digite sua senha' secureTextEntry 
        style={style.textInput}/> */}
        <Button title="Clique me" color='pink'/>
        <TouchableOpacity>
          <Text style={{ fontSize: 50}}>Texto</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
// sempre definir o tamanho da imagem
// react é row (item ao lado de item)
// Button é um pouco limitado para estilo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // textInput: {

  // },
});
