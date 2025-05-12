import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { getCurrentUser, logout } from '../auth';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const[currentUser, setCurrentUser] = useState()
  useEffect(() => {
    const getUser = async() =>{
      const user = await getCurrentUser()
      setCurrentUser(user)
    }
    getUser();
  },[])

  const handleLogout = async () => {
    await logout();
    navigation.replace('Login');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo à tela principal! {currentUser?.email}</Text>
      <Button title="Sair" onPress={handleLogout} />
    </View>
  );
}