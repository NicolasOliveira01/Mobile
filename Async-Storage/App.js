// App.js

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { isLoggedIn } from './auth';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';

const Stack = createNativeStackNavigator();
// cria um stack navigator (navegador de pilha), usado para definir as telas e navegar
// entre elas, está relacionado a rotas

export default function App() {
// componente principal do app, tudo dentro dele será exibido na tela

  const [initialRoute, setInitialRoute] = useState(null);
	// initialRoute -> guarda qual vai ser a primeira tela do app, "login" ou "home"
	// setInitialRoute -> atualiza o valor de initialRoute 
	// useState(null) -> valor inicial do estado é null porque não se sabe se o usuário
	// está logado ou não
	
  useEffect(() => {
    const determineRoute = async () => {
      const logged = await isLoggedIn();
      setInitialRoute(logged ? 'Home' : 'Login');
    };

    determineRoute();
  }, []);
  // decide se o usuário será redirecionado para a tela de Home ou Login, dependendo se 
  // está logado ou não. 
  // [] no final do código é as dependências, como ele está vazia, esse useEffect só vai
  // ser executado somente uma vez e depois que o componente App é renderizado pela 
  // primeira vez, se tivesse alguma var dentro do [], o useEffect seria executado todas
  // as vezes que essa var fosse alterada.
  // "determineRoute" é uma função assíncrona que serve para descobrir se o usuário já 
  // está logado
  // logged -> chama a função "isLoggedIn()" que retorna um booleano para dizer se o 
  // usuario está logado ou não 
  // setInitialRoute -> se for true, muda o estado de initialRoute para "Home", caso 
  // contrário initialRoute fica "Login"
  // No final chama a função determineRoute() após a renderização do app.js

  if (!initialRoute) {
    return null; // Splash screen ou loading
  }
  // serve como uma tela de carregamento temporária até descobrir se o usuário deve ir 
  // para "Home" ou "Login".
  // null, undefined, false, 0, "" -> todos os valores que entrariam no 
  // "if (!initialRoute)"

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // Este código configura a navegação do aplicativo
  // NavigationContainer -> gerencia todo o sistema de navegação do app
  // Stack.Navigator -> Define a navegação em pilha (stack navigation) e dentro dele
  // define todas as telas existentes usando o "Stack.Screen"
  // initialRouteName -> define qual tela será exibida
  // screenOptions={{ headerShown: false }} -> Esconde o cabeçalho padrão em todas as 
  // telas
  // Stack.Screen -> é aonde vai definir cada tela, cada tela precisa de um 1 
  // Stack.Screen
  // "name" -> define o nome da tela que vai ser usado no navigation.navigate para mudar 
  // de tela
  // "component" define a tela que o "name" está se referindo, no caso "LoginScreen" e 
  // "HomeScreen" foi o nome atribuído a importação das telas no app.js
}