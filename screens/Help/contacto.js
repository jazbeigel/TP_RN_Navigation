import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Contacto() {
  const [mensaje, setMensaje] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacto</Text>
      <TextInput
        placeholder="Escribí tu mensaje..."
        value={mensaje}
        onChangeText={setMensaje}
        style={styles.input}
        multiline
      />
      <Button title="Enviar" onPress={() => alert('Mensaje enviado')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E87',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    height: 100,
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
});
