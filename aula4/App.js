import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {

  useEffect(() =>{
    console.log("Renderizou o Componente dentro do useEffect")
  },[])
  console.log("Renderizou o Componente fora do useEffect")
  // toda vez que o count mudar faz alguma coisa
  // recomendação colocar no máximo duas dentro do [] (dependências)
  // o useEffect só vai rodar quando o componente estiver totalmente montado, por isso renderizou fora do useEffect

  useEffect(() => {

    console.log("somou o count, então o useEffect rodou", count)
  }, [count])
  
  const [count, setCount] = useState(0);
  // o primeiro elemento do array, no caso count é a variável que armazena o state
  // set é a função de callback (atualização do state)
  // os hooks começam com use
  // colocou o 0 dentro de useState porque vai contar (count)

  function handleIncrementCounter() {
    setCount(count + 1);
  }

  function handleDecrementCounter() {
    if(count === 0) return;
    setCount(count - 1)
  }

  // function handle -> iteração com usuário 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter: {count}</Text>
      <Button title='Incrementar' onPress={handleIncrementCounter}/>
      <Button title='Decrementar' onPress={handleDecrementCounter}/>
      <StatusBar style="auto" />
    </View>
    // setCount(count+1) -> onPress não entende que precisa ser pressionado, com a arrow function diz que vai ter que esperar 
    // uma ação (clique) para executar outra ação. Sem arrow function da erro 
    // fazer a ação do usuário (dentro de onPress) -> usar a arrow function ou fazer uma function se usar ()
    // na function vai dar erro porque ele entende como muitas ações ao mesmo tempo
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
