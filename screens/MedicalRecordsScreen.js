import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MedicalRecordsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registros Médicos</Text>
      <View style={styles.card}>
        <Image
          source={require('../assets/Registrosmedicos.jpg')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.text}>
          Aquí puedes mostrar registros médicos y otra información relevante.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MedicalRecordsScreen;
