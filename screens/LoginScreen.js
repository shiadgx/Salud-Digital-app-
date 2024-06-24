import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleLogin = async () => {
    try {
      // Validar que se haya ingresado el correo y la contraseña
      if (!correo || !contraseña) {
        Alert.alert('Error', 'Por favor ingresa correo y contraseña');
        return;
      }

      const response = await axios.post('http://192.168.100.2:3000/api/iniciarSesion', {
        correo,
        contraseña
      });

      console.log('Respuesta del servidor:', response.data);
      
      // Validar la respuesta del servidor
      if (response.status === 200) {
        // Inicio de sesión exitoso
        console.log('Inicio de sesión exitoso');
        navigation.navigate('Home'); // Redirige a la pantalla de inicio (Home)
      } else {
        // Error en inicio de sesión
        console.log('Error en inicio de sesión');
        Alert.alert('Error', 'Hubo un problema al iniciar sesión', [{ text: 'OK' }]);
      }

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      Alert.alert('Error', 'Hubo un problema al iniciar sesión');
    }
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register'); // Redirige a la pantalla de registro (Register)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Correo"
          value={correo}
          onChangeText={setCorreo}
          autoCapitalize="none"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={contraseña}
          onChangeText={setContraseña}
          secureTextEntry={true}
          placeholderTextColor="#aaa"
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerLink} onPress={handleRegisterPress}>
        <Text style={styles.registerLinkText}>¿No tienes cuenta? Regístrate</Text>
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
  loginButton: {
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
  registerLink: {
    marginTop: 20,
  },
  registerLinkText: {
    color: 'white',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
