// App.tsx

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SportScreen from "./screens/SportScreen";
import ElectricScreen from "./screens/ElectricScreen";
import MovingScreen from "./screens/MovingScreen";
import FamilyScreen from "./screens/FamilyScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Sport" component={SportScreen}/>
      <Stack.Screen name="Electric" component={ElectricScreen}/>
      <Stack.Screen name="Moving" component={MovingScreen}/>
      <Stack.Screen name="Family" component={FamilyScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
