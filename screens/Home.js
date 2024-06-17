import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = () => {
    const handleDropdownPress = () => {
        // Implementar lógica para el dropdown si es necesario
    };

    const handleLinkPress = (url) => {
        // Implementar lógica para manejar la navegación a otras pantallas o URLs
        // Ejemplo: navigation.navigate('ScreenName') o Linking.openURL(url)
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('./assets/LogoSD-removebg-preview.png')} style={styles.logo} />
                <View style={styles.headerButtons}>
                    <TouchableOpacity style={styles.dropdown} onPress={handleDropdownPress}>
                        <Text style={styles.dropdownText}>Usuario</Text>
                        <View style={styles.dropdownContent}>
                            <TouchableOpacity onPress={() => handleLinkPress('JSP/HistorialCompras.jsp')}>
                                <Text style={styles.dropdownItem}>Historial</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleLinkPress('JSP/Configuracion.jsp')}>
                                <Text style={styles.dropdownItem}>Ajustes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleLinkPress('JSP/CloseSecion.jsp')}>
                                <Text style={styles.dropdownItem}>Cerrar Sesión</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.main}>
                <TouchableOpacity style={styles.diagonalContainer} onPress={() => handleLinkPress('pagina1.html')}>
                    <Image source={require('../assets/cita.png')} style={styles.diagonalImage} />
                    <Text style={styles.diagonalText}>Agendar una cita</Text>
                    <TouchableOpacity style={styles.diagonalButton} onPress={() => handleLinkPress('JSP/Citas.jsp')}>
                        <Text style={styles.buttonText}>Click aquí</Text>
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity style={styles.diagonalContainer} onPress={() => handleLinkPress('pagina2.html')}>
                    <Image source={require('../assets/medicina.png')} style={styles.diagonalImage} />
                    <Text style={styles.diagonalText}>Medicinas Disponibles</Text>
                    <TouchableOpacity style={styles.diagonalButton} onPress={() => handleLinkPress('JSP/VInventario.jsp')}>
                        <Text style={styles.buttonText}>Click aquí</Text>
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity style={styles.diagonalContainer} onPress={() => handleLinkPress('pagina3.html')}>
                    <Image source={require('../assets/Registrosmedicos.jpg')} style={styles.diagonalImage} />
                    <Text style={styles.diagonalText}>Registros Médicos</Text>
                    <TouchableOpacity style={styles.diagonalButton} onPress={() => handleLinkPress('JSP/CitasV.jsp')}>
                        <Text style={styles.buttonText}>Click aquí</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <Text>© 2023 SaludDigital. Todos los derechos reservados.</Text>
                <Text>Contacto: info@saluddigital.com</Text>
                <Text>Dirección: Calle Principal, Ciudad</Text>
                <TouchableOpacity onPress={() => handleLinkPress('JSP/Creditos.jsp')}>
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
        alignItems: 'center',
        paddingVertical: 10,
    },
    logo: {
        width: 200,
        height: 50,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    headerButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
    },
    dropdown: {
        position: 'relative',
        marginRight: 10,
    },
    dropdownText: {
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 15,
    },
    dropdownContent: {
        position: 'absolute',
        backgroundColor: '#3498db',
        borderRadius: 10,
        padding: 10,
        right: 0,
        zIndex: 1,
        minWidth: 150,
    },
    dropdownItem: {
        color: 'white',
        paddingVertical: 5,
    },
    main: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
    },
    diagonalContainer: {
        position: 'relative',
        overflow: 'hidden',
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: '#3498db',
    },
    diagonalImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    diagonalText: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    diagonalButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: '#2980b9',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
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
