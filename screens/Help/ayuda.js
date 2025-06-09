import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Ayuda() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Necesitás ayuda?</Text>
      <Text style={styles.text}>
        Aquí vas a encontrar respuestas a preguntas frecuentes.
      </Text>

      <View style={styles.faqContainer}>
        <Text style={styles.question}>• ¿Cómo saco un turno médico?</Text>
        <Text style={styles.answer}>
          Desde la pantalla principal, tocá en "Pedir turno" y seleccioná especialidad, día y horario.
        </Text>

        <Text style={styles.question}>• ¿Dónde veo mis turnos pendientes?</Text>
        <Text style={styles.answer}>
          En la sección "Mis turnos", vas a poder ver todos los turnos que tenés agendados.
        </Text>

        <Text style={styles.question}>• ¿Puedo cancelar un turno?</Text>
        <Text style={styles.answer}>
          Sí. Entrá a "Mis turnos", tocá el turno y elegí "Cancelar".
        </Text>

        <Text style={styles.question}>• ¿Cómo edito mi información de perfil?</Text>
        <Text style={styles.answer}>
          En la sección "Mi perfil", tocá en "Editar perfil" para actualizar tus datos.
        </Text>

        <Text style={styles.question}>• ¿Qué hago si olvidé mi contraseña?</Text>
        <Text style={styles.answer}>
          En la pantalla de inicio de sesión, tocá en "¿Olvidaste tu contraseña?" y seguí los pasos.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Contactar Soporte"
          color="#fff"
          onPress={() => navigation.navigate('Contacto')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaabe9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  faqContainer: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
  },
  question: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 16,
  },
  answer: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },
  buttonContainer: {
    width: '100%',
    color:'#fff',
    borderRadius: 10,    // Bordes más redondos para coincidir con Ayuda
    backgroundColor:'#403d90'
  },
});
