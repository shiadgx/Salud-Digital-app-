import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const App = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleRegistro = async () => {
    try {
      const response = await axios.post('http://192.168.100.2:3000/api/registrarUsuario', {
        nombre: nombre,
        email: email,
        contraseña: contraseña
      });

      console.log('Respuesta del servidor:', response.data);
      Alert.alert('Usuario registrado correctamente'); // Mensaje de éxito

    } catch (error) {
      console.error('Error al registrar usuario:', error);
      Alert.alert('Error al intentar registrar el usuario'); // Mensaje de error
    }
  };

  return (
    <View style={styles.container}>
      <Text>Registro de Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={text => setNombre(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={contraseña}
        onChangeText={text => setContraseña(text)}
      />
      <Button title="Registrar" onPress={handleRegistro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default App;
