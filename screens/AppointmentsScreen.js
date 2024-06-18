import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const CitasScreen = ({ navigation }) => {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [motivo, setMotivo] = useState('');

  const handleCrearCita = async () => {
    try {
      // Validar que se haya ingresado la fecha, hora y motivo
      if (!fecha || !hora || !motivo) {
        Alert.alert('Error', 'Por favor ingresa la fecha, hora y motivo de la cita');
        return;
      }

      // Suponiendo que tienes el servidor Node.js ejecutándose en la misma red local
      const response = await axios.post('https://us-east-2.aws.data.mongodb-api.com/app/data-cyaayom/endpoint/data/v1/api/crearCita', {
        usuarioId: '123', // Aquí deberías proporcionar el ID del usuario actual
        fecha,
        hora,
        motivo
      });

      console.log('Respuesta del servidor:', response.data);

      // Validar la respuesta del servidor
      if (response.status === 200) {
        // Cita creada exitosamente
        console.log('Cita creada exitosamente');
        Alert.alert('Éxito', 'Cita creada exitosamente', [{ text: 'OK', onPress: () => navigation.navigate('Home') }]);
      } else {
        // Error al crear la cita
        console.log('Error al crear la cita');
        Alert.alert('Error', 'No se pudo crear la cita', [{ text: 'OK' }]);
      }

    } catch (error) {
      console.error('Error al crear la cita:', error);
      Alert.alert('Error', 'No se pudo crear la cita');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Cita</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Fecha (DD/MM/AAAA)"
          value={fecha}
          onChangeText={setFecha}
          keyboardType="numeric"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Hora (HH:MM)"
          value={hora}
          onChangeText={setHora}
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Motivo"
          value={motivo}
          onChangeText={setMotivo}
          placeholderTextColor="#aaa"
        />
      </View>
      <TouchableOpacity style={styles.crearCitaButton} onPress={handleCrearCita}>
        <Text style={styles.buttonText}>Crear Cita</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    color: 'white',
    fontSize: 16,
  },
  crearCitaButton: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CitasScreen;
