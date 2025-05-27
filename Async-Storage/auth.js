// auth.js

import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = async (email) => {
  await AsyncStorage.setItem('@user', JSON.stringify({ email: email }));
  return true;
};
// armazena o email que o usuário digitou localmente, "login" é a função que recebe como
// parâmetro o valor do "email" (o que o usuário digitou no campo email)
// await -> aguardando uma operação assíncrona, o código vai "esperar" a conclusão da 
// operação antes de continuar para a próxima linha de código
// AsyncStorage -> armazena dados de forma persistente no dispositivo do usuário
// .setItem -> "@user" é a chave onde o valor será armazenado no AsyncStorage para 1 
// usuário específico, se quiser para outros teria que fazer um "@user1" por exemplo
// JSON.stringify -> método utilizado para converter um objeto JavaScript em uma string 
// JSON, isso porque o AsyncStorage só aceita string, isso transforma em 
// "{ email: "usuario@example.com" }".
// No final este código sempre vai retornar "true"

export const logout = async () => {
  await AsyncStorage.removeItem('@user');
};
// pensando que o AsyncStorage é um banco de dados, este código vai remover o registro
// que foi cadastrado na função "login" através da chave "@user"

export const getCurrentUser = async () => {
  const userData = await AsyncStorage.getItem('@user');
  return userData ? JSON.parse(userData) : null;
};
// recupera o usuário armazenado no AsyncStorage
// getItem -> Tenta obter o item armazenado através de uma chave do AsyncStorage 
// ("@user")
// JSON.parse -> o retorno do getItem está em string JSON, JSON.parse transforma esse 
// item em objeto JavaScript
// return -> se o usuário foi encontrado, vai retornar o objeto JavaScript, se não vai
// retornar "null"

export const isLoggedIn = async () => {
  return await AsyncStorage.getItem('@user') !== null;
};
// verifica se o usuário está logado ao checar se existe um item armazenado no 
// AsyncStorage através da chave
// return -> retorna um booleano, se ele estiver logado (!== null) vai ser true e se ele
// não estiver logado (== null) vai retornar false