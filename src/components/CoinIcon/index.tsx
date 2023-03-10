import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

const CoinItem = () => {
  return (
    <View className="flex flex-row  border-b-[1px] border-[#2f2f2f] p-[15px] shadow-lg align-center">
        <Image 
        source={{ uri: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"}}
        className='h-10 w-10 '/>
      
       <View className='ml-4'>
        <Text className="text-white text-base font-bold mb-[1px]">Bitcoin</Text>
        <View className='flex-row space-x-1 align-center items-center'>
          <View className='bg-[#585858]/75 py-1 px-2 rounded-md'>
            <Text className="text-white text-bold">1</Text>
          </View>
          
          <Text className="text-white ">BTC</Text>
          <AntDesign 
          name="caretdown" 
          size={12} 
          color="white"
          />
          <Text className="text-white ">0.63%</Text>
        </View>
  
        
       </View>
       <View style={{ marginLeft: 'auto'}}>
          <Text className="text-white text-base font-bold">234324</Text>
          <Text className="text-white ">MCap 1.076 T</Text>
        </View>
      </View>
  )
}

export default CoinItem