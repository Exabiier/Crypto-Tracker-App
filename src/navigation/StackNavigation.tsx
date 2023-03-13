import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import CoinDetailScreen from '../screens/CoinDetailScreen';


const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{ headerShown: false}} >
        <>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={CoinDetailScreen} />
        </>
      
    </Stack.Navigator>

  )
}

export default StackNavigation