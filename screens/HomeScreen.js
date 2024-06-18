import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuPress = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkPress = (screenName) => {
    navigation.navigate(screenName); // Navega a la pantalla especificada
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/LogoSD-removebg-preview.png')} style={styles.logo} />
        <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
          <Text style={styles.menuButtonText}>☰</Text>
        </TouchableOpacity>
      </View>

      {isMenuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => handleLinkPress('Settings')}>
            <Text style={styles.menuItemText}>Ajustes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => handleLinkPress('Login')}>
            <Text style={styles.menuItemText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView contentContainerStyle={styles.main}>
        <TouchableOpacity style={styles.diagonalContainer} onPress={() => handleLinkPress('Appointments')}>
          <Image source={require('../assets/cita.png')} style={styles.diagonalImage} />
          <Text style={styles.diagonalText}>Agendar cita</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.diagonalContainer} onPress={() => handleLinkPress('Medicines')}>
          <Image source={require('../assets/medicina.png')} style={styles.diagonalImage} />
          <Text style={styles.diagonalText}>Medicinas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.diagonalContainer} onPress={() => handleLinkPress('MedicalRecords')}>
          <Image source={require('../assets/Registrosmedicos.jpg')} style={styles.diagonalImage} />
          <Text style={styles.diagonalText}>Registros médicos</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <Text>© 2023 SaludDigital. Todos los derechos reservados.</Text>
        <Text>Contacto: info@saluddigital.com</Text>
        <Text>Dirección: Calle Principal, Ciudad</Text>
        <TouchableOpacity onPress={() => handleLinkPress('About')}>
          <Text style={styles.footerLink}>Acerca de</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  header: {
    backgroundColor: '#3498db',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 40,
    resizeMode: 'contain',
  },
  menuButton: {
    padding: 10,
  },
  menuButtonText: {
    fontSize: 24,
    color: 'white',
  },
  menu: {
    backgroundColor: '#ffffff', // Color de fondo blanco para el menú
    position: 'absolute',
    top: 60,
    right: 20,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 1,
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuItemText: {
    color: '#3498db', // Color de texto azul
    fontSize: 16,
  },
  main: {
    padding: 20,
  },
  diagonalContainer: {
    position: 'relative',
    overflow: 'hidden',
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
    height: 120, // Altura reducida para contenedor diagonal
  },
  diagonalImage: {
    width: '60%', // Ancho reducido para la imagen dentro del contenedor diagonal
    height: '60%', // Altura reducida para la imagen dentro del contenedor diagonal
    resizeMode: 'contain',
  },
  diagonalText: {
    position: 'absolute',
    bottom: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#3498db',
    padding: 20,
    alignItems: 'center',
  },
  footerLink: {
    color: 'white',
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;
