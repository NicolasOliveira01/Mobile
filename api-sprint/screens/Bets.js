// Home.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Account() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>INFORMAÇÕES DA CONTA CORRENTE</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('AccessAccount')}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#FCC000',
    paddingVertical: width * 0.03,
    paddingHorizontal: width * 0.18,
    marginTop: height * 0.08,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#121212',
    fontSize: 16,
    fontWeight: 'bold',
  },
});