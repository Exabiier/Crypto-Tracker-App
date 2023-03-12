import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import CoinItem from '../../src/components/CoinIcon';
import cryptoCurrencies from '../../assets/data/cryptocurrencies.json'

const HomeScreen = () => {
    const cryptoCurrency: any = require('../../assets/data/cryptocurrencies.json');
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

export default HomeScreen