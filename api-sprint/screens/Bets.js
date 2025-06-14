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
  const value = 5555;

  // Função que retorna o objeto completo baseado no valor

  const helpButton = {
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    maxWidth: 250,
  };

  const getStatusInfo = (val) => {
    if (val <= 500) {
      return {
        status: 'verde',
        backgroundColor: '#4CAF50',
        padding: 6,
        fontSize: 7,
        texto: 'Quer conversar? Estamos aqui 😊',
      };
    }
    if (val <= 1000) {
      return {
        status: 'amarelo',
        backgroundColor: '#FFC107',
        padding: 8,
        fontSize: 8,
        texto: 'Talvez seja bom conversar com alguém',
      };
    }
    return {
      status: 'vermelho',
      backgroundColor: '#F44336',
      padding: 10,
      fontSize: width * 0.035,
      texto: 'Você não está sozinho. Fale com alguém ❤️',
    };
  };

  const { backgroundColor, padding, fontSize, texto } = getStatusInfo(value);

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={[ helpButton, { backgroundColor, padding }]} activeOpacity={0.7}>
        <Text style={{ fontSize }}>{texto}</Text>
      </TouchableOpacity>

      <View style={[styles.card, { backgroundColor }]}>
        <Text style={styles.cardText}>Valor de apostas esse mês:</Text>
        <Text style={styles.cardText}>R$ {value},00</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('AccessAccount')}
        activeOpacity={0.7}
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
    backgroundColor: '#121212',
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
  card: {
    width: 300,
    height: 120,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
