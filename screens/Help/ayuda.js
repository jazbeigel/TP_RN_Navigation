import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Ayuda() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Necesitás ayuda?</Text>
      <Image source={require('../../assets/help.png')} style={styles.image} />
      <Text style={styles.text}>Aquí vas a encontrar respuestas a preguntas frecuentes.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E87',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});
