import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import CoinItem from './src/components/CoinIcon';
import cryptoCurrencies from './assets/data/cryptocurrencies.json'


// caredown size 24 careup for the name

export default function App() {
  const cryptoCurrency: any = require('./assets/data/cryptocurrencies.json');
  const cryptoCurrencyTyped: CryptoCurrencyCoin[] = cryptoCurrency
  return (
    <View className="flex-1 bg-[#121212] pt-[50px] ">
      <FlatList<CryptoCurrencyCoin>
      data={cryptoCurrencyTyped}
      renderItem={({item})=> (
        <CoinItem key={item.id} coin={item} />
      )}
      />
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
