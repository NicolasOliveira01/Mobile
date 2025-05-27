// Home.js

import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { getCurrentUser, logout } from '../auth';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
// definição do componente HomeScreen

  const navigation = useNavigation();
  // useNavigation fornece funções para navegar entre as telas 
  
  const[currentUser, setCurrentUser] = useState()
  // currentUser -> guarda os dados do usuário atual, inicia como undefined 
  // setCurrentUser -> função para atualizar o estado com o usuário carregado
  
  useEffect(() => {
    const getUser = async() =>{
      const user = await getCurrentUser()
      setCurrentUser(user)
    }
    getUser();
  },[])
  // getCurrentUser() -> { email: "usuario@example.com" } (retorno em forma de objeto 
  // JavaScript)
  // chama a função getCurrentUser() que retorna o objeto js com o email cadastrado pelo 
  // usuário no AsyncStorage e atualiza o estado do currentUser que passa ser o próprio
  // objeto cadastrado

  const handleLogout = async () => {
    await logout();
    navigation.replace('Login');
  };
  // logout() -> remove o registro que foi cadastrado na função "login" através da 
  // chave "@user"
  // navigation.replace('Login') -> para entender isso precisa antes entender sobre a 
  // pilha de navegação, ela é como se fosse uma pilha de pratos e o navigation.navigate
  // adiciona uma nova tela (prato) na pilha e mundano de tela, a tela anterior continua
  // na pilha, o usuário pode voltar para a tela anterior (o que não faz sentido em 
  // logout). o navigation.replace remove a atual e troca por outra tela, o usuário não
  // pode mais voltar para a tela anterior

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo à tela principal! {currentUser?.email}</Text>
      <Button title="Sair" onPress={handleLogout} />
    </View>
  );
  // currentUser?.email -> currentUser é um objeto com chave "email" e valor com o email
  // cadastrado, esse código acessa o valor (email cadastrado) e o "?" serve somente para
  // não dar erro caso o valor seja null ou undefined
}