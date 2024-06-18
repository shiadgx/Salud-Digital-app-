import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ProfileScreen = () => {
  const [loading, setLoading] = useState(true);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    obtenerDatosPerfil();
  }, []);

  const obtenerDatosPerfil = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');

      if (!userId) {
        throw new Error('ID de usuario no encontrado en AsyncStorage');
      }

      const response = await axios.get(`http://192.168.100.2:3000/api/perfil/${userId}`);

      if (response.status === 200) {
        setUsuario(response.data);
        setLoading(false);
      } else {
        console.error('Error al obtener datos del perfil:', response.data);
        Alert.alert('Error', 'No se pudieron obtener los datos del perfil');
      }
    } catch (error) {
      console.error('Error al obtener datos del perfil:', error);
      Alert.alert('Error', 'No se pudieron obtener los datos del perfil');
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#3498db" />
      </View>
    );
  }

  // Manejo de la alerta de éxito al obtener los datos del perfil
  if (usuario) {
    console.log('Respuesta del servidor:', usuario);
    Alert.alert('Éxito', 'Datos del perfil obtenidos correctamente');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://via.placeholder.com/150' }} // Cambiar a la URL del avatar real si está disponible
        />
        <Text style={styles.name}>{usuario.nombre}</Text>
        <Text style={styles.email}>{usuario.correo}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Información de Perfil</Text>
        {/* Aquí puedes agregar más secciones o detalles del perfil */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
    borderColor: '#3498db',
    borderWidth: 2,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  email: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 10,
  },
});

export default ProfileScreen;
