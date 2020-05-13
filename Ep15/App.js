import React, { useState } from 'react';

import * as Font from 'expo-font';

import { AppLoading } from 'expo'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import Dashboard from './Pages/Dashboard'
import Hospitals from './Pages/Hospitals'
import ByMeHospitals from './Pages/ByMeHospitals'
import HostpitalDetail from './Pages/HostipalDetail'
import Profile from './Pages/Profile'
import { useSafeArea } from 'react-native-safe-area-context';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HospitalsTab = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={{
          activeTintColor : 'tomato',
          inactiveTintColor : 'gray',
          labelStyle : {
            fontFamily : 'Dirooz'
          }
      }}
    >
      <Tab.Screen name="Hospilats" component={Hospitals}
       options={{
          tabBarLabel : 'تمام',
          tabBarIcon : ({color}) => (<Ionicons name="md-menu" size={24} color={color} />)
      }} />
      <Tab.Screen name="ByMeHospitals" component={ByMeHospitals}
        options={{
          tabBarLabel : 'نزدیک من',
          tabBarIcon : ({color}) => (<Ionicons name="ios-star" size={24} color={color} />)
        }} 
      />
    </Tab.Navigator>
  )
}

const loadFont = () => {
  return Font.loadAsync({
    Dirooz: require('./assets/fonts/Dirooz.ttf')
  })
}



export default function App() {
  const [loadedData, setLoadedData] = useState(false);

  if (!loadedData) {
    return (<AppLoading startAsync={loadFont} onFinish={() => setLoadedData(true)} onError={console.warn} />)
  }

  return (

    <NavigationContainer>
      <Stack.Navigator 
        screenOptions = {{
          headerStyle : {
            backgroundColor : 'tomato'
          },
          headerTitleStyle : {
            fontFamily : 'Dirooz'
          },
          headerBackTitleStyle : {
            fontFamily :'Dirooz',
          },
          headerTitleAlign : 'center'
        }}
      >
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerTitle: 'داشبورد' }} />
        <Stack.Screen name="HospitalsTab" component={HospitalsTab} options={{ headerTitle: 'بیمارستان ها' }} />
        <Stack.Screen name="HostpitalDetail" component={HostpitalDetail} options={{ headerTitle: 'جزییات بیمارستان' }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerTitle: 'پروفایل' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

