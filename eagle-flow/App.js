import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { Dimensions } from 'react-native';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './Screens/Welcome';
import Home from './Screens/HomePage';
import Named from './Screens/NamedCommands';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName = "Welcome"
        screenOptions = {{headerShown: false}}
      >
        <Stack.Screen name = "Welcome" component = {Welcome} />
        <Stack.Screen name = "Home" component = {Home} />
        <Stack.Screen name = "Named" component = {Named} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
