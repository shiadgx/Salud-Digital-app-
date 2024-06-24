// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import AppointmentsScreen from './screens/AppointmentsScreen';
import MedicinesScreen from './screens/MedicinesScreen.js';
import MedicalRecordsScreen from './screens/MedicalRecordsScreen.js';
import amplify, * as awsAmplify from 'aws-amplify';
import { aws_amplify, aws_config } from 'aws-cdk-lib';
import awsdonfig from './src/aws-exports.js';
import { Amplify } from 'aws-amplify';
const Stack = createStackNavigator();




const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Appointments" component={AppointmentsScreen} />
        <Stack.Screen name="Medicines" component={MedicinesScreen} />
        <Stack.Screen name="MedicalRecords" component={MedicalRecordsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
