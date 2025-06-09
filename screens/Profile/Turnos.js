import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function Turnos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tus Turnos</Text>
      <Button title="Actualizar" />
      <Button title="Volver a la home" onPress={() => navigation.navigate('MiPerfil')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14144F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
