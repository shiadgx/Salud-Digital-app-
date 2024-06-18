import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegistro = async () => {
    try {
      // Validar que las contraseñas coincidan
      if (contraseña !== confirmarContraseña) {
        Alert.alert('Error', 'Las contraseñas no coinciden');
        return;
      }

      // Validar que la contraseña contenga al menos un número y un caracter especial
      const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
      if (!regex.test(contraseña)) {
        Alert.alert('Error', 'La contraseña debe contener al menos un número y un carácter especial (!@#$%^&*) y tener al menos 6 caracteres');
        return;
      }

      const response = await axios.post('http://192.168.100.2:3000/api/registrarUsuario', {
        nombre,
        apellidos,
        correo,
        contraseña
      });

      console.log('Respuesta del servidor:', response.data);
      Alert.alert('Registro exitoso', 'Usuario registrado correctamente');

      // Limpia los campos después de un registro exitoso si es necesario
      setNombre('');
      setApellidos('');
      setCorreo('');
      setContraseña('');
      setConfirmarContraseña('');

      // Redirige a la pantalla de inicio (Home)
      navigation.navigate('Home');

    } catch (error) {
      console.error('Error al registrar usuario:', error);
      Alert.alert('Error', 'Hubo un problema al registrar el usuario');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Usuario</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Apellidos:</Text>
        <TextInput
          style={styles.input}
          placeholder="Apellidos"
          value={apellidos}
          onChangeText={setApellidos}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Correo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={contraseña}
          onChangeText={setContraseña}
          secureTextEntry={!showPassword}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Confirmar Contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirmar Contraseña"
          value={confirmarContraseña}
          onChangeText={setConfirmarContraseña}
          secureTextEntry={!showPassword}
        />
      </View>
      <Button title={showPassword ? "Ocultar Contraseñas" : "Mostrar Contraseñas"} onPress={togglePasswordVisibility} />
      <Button title="Registrarse" onPress={handleRegistro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#3498db', // Fondo azul oscuro
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // Texto blanco
  },
  inputGroup: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    color: '#fff', // Texto blanco
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#fff', // Borde blanco
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Fondo blanco transparente
    color: '#fff', // Texto blanco
  },
});

export default RegisterScreen;
