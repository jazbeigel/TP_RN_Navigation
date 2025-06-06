import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InfoScreen({ route }) {
  const { nombre, telefono } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información del Usuario</Text>
      <Text style={styles.info}>Nombre: {nombre}</Text>
      <Text style={styles.info}>Teléfono: {telefono}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#2A2A7E', 
    justifyContent: 'center', 
    padding: 20 },
  title: { 
    color: 'white', 
    fontSize: 26, 
    marginBottom: 20 },
  info: { 
    color: 'white', 
    fontSize: 18, 
    marginBottom: 10 },
});
