import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TextStyle, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');

  const enviarDatos = () => {
    // Aquí podés poner la lógica que necesites para enviar o validar datos
    alert(`Nombre: ${nombre}\nTeléfono: ${telefono}`);
    setNombre('');
    setTelefono('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a MedUp</Text>
      <TextInput
        placeholder="Nombre"
        placeholderTextColor="#999"
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        placeholder="Teléfono"
        placeholderTextColor="#999"
        style={styles.input}
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={enviarDatos}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6a67ab',  // color clarito pedido
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 15,
    padding: 10,
    borderRadius: 20,  // más redondeado para coincidir
    fontSize: 16,
    color: '#000',
  },
  buttonContainer: {
    backgroundColor: '#403d90', // color del botón igual que en Ayuda
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
