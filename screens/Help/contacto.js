import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Contacto() {
  const [mensaje, setMensaje] = useState('');

  const enviarMensaje = () => {
    alert('Mensaje enviado');
    setMensaje('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacto</Text>
      <TextInput
        placeholder="Escribí tu mensaje..."
        placeholderTextColor="#999"
        value={mensaje}
        onChangeText={setMensaje}
        style={styles.input}
        multiline
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={enviarMensaje}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaabe9',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,        // Igual que Ayuda
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    height: 100,
    padding: 10,
    borderRadius: 10,    // Bordes más redondos para coincidir con Ayuda
    marginBottom: 15,
    fontSize: 16,
    color: '#000',
  },
  buttonContainer: {
    backgroundColor: '#403d90', // mismo color que Ayuda
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',         // texto blanco igual que Ayuda
    fontSize: 16,
    fontWeight: 'bold',
  },
});
