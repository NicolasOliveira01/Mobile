// Login.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { login } from '../auth';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    await login(email);
    // chama a função login, armazena o email que o usuário digitou localmente
    // usa o await, então espera o login terminar para depois continuar para a próxima
    // linha de código
    navigation.replace('Home');
    // troca a tela Login da pilha pela Home, removendo a Login e o usuário não 
    // consegue mais voltar para a Login
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  }
});