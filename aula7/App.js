import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { isLoggedIn } from './auth';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    const determineRoute = async () => {
      const logged = await isLoggedIn();
      setInitialRoute(logged ? 'Home' : 'Login');
    };

    determineRoute();
  }, []);

  if (!initialRoute) {
    return null; // Splash screen ou loading
  }

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
}