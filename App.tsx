import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import CoinItem from './src/components/CoinIcon';


// caredown size 24 careup for the name

export default function App() {
  return (
    <View className="flex-1 bg-[#121212] pt-[50px] ">
      <CoinItem />
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
