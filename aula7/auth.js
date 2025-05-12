import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = async (email) => {
  await AsyncStorage.setItem('@user', JSON.stringify({ email }));
  return true;
};

export const logout = async () => {
  await AsyncStorage.removeItem('@user');
};

export const getCurrentUser = async () => {
  const userData = await AsyncStorage.getItem('@user');
  return userData ? JSON.parse(userData) : null;
};

export const isLoggedIn = async () => {
  return await AsyncStorage.getItem('@user') !== null;
};