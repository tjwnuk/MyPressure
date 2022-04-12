import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './app/screens/HomeScreen';
import AddItemScreen from './app/screens/AddItemScreen';

import colors from './app/config/colors'

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.violet,
        },
        headerTintColor: colors.white,
      }}>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{ title: 'My Pressure' }}
      />
      <Stack.Screen
        name='AddItemScreen'
        component={AddItemScreen}
        options={{ title: 'Add measurement' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {


  return (
    <NavigationContainer>
      <StackNavigator />
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