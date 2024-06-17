import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Intento de inicio de sesión');
    if (username === 'example@correo.com' && password === 'password123') {
      console.log('Inicio de sesión exitoso');
      navigation.navigate('Home'); // Asegúrate de tener una pantalla 'Home' definida en tu navegación
    } else {
      console.log('Credenciales incorrectas');
      Alert.alert('Error', 'Correo o contraseña incorrectos', [{ text: 'OK' }]);
    }
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register'); // Asegúrate de tener una pantalla 'Register' definida en tu navegación
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Correo"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
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
    backgroundColor: 'linear-gradient(to right, rgb(0, 255, 255), #3498db)',
  },
  title: {
    fontFamily: 'Pacifico',
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    color: 'white',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#2980b9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  registerLink: {
    marginTop: 10,
  },
  registerLinkText: {
    color: 'white',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
