import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Miperfil({ route, navigation }) {
  const { nombre, telefono } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Perfil</Text>
      {nombre && telefono ? (
        <>
          <Text style={styles.text}>Nombre: {nombre}</Text>
          <Text style={styles.text}>Teléfono: {telefono}</Text>
        </>
      ) : (
        <Text style={styles.text}>No se han recibido datos.</Text>
      )}
      <Button title="Ver Turnos" onPress={() => navigation.navigate('Turnos')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14144F',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
});
