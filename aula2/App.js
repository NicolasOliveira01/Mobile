import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './Profile.js';
// Ctrl + espaço

const pessoas = [
  {id:1, nome:'Nicolas', idade:20, email:'nicolas@gmail.com', img:'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  {id:2, nome: 'Anderson', idade: 30, email:'anderson@gmail.com', img:'https://upload.wikimedia.org/wikipedia/commons/4/43/Cute_dog.jpg'}
]

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {pessoas.map((pessoa) => (
        <Profile 
          id={pessoa.id} 
          nome={pessoa.nome} 
          idade={pessoa.idade} 
          email={pessoa.email}
          img={pessoa.img} 
        />
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

// jsx -> js com HTML
// react e react native
// é no app.js que renderiza no mobile
// props -> ajuda quando tem por exemplo um profile para cada pessoa, para não precisar fazer 50 vezes e sim 1 vez
// em um arquivo js define o props.nome por exemplo e dentro do app.js importa esse arquivo e define o props, como name="Anderson"
// pode criar um araay [] e cada elemento é um {} e dentro da props usa o map. O map precisa deuma Key como um id

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
