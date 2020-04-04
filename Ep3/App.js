import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './Pages/Dashboard'
import Hospitals from './Pages/Hospitals'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Hospitals" component={Hospitals} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

