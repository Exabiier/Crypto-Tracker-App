import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


type Props = {
  coin: CryptoCurrencyCoin;
}

const CoinItem = ({ coin }: Props) => {
  const [color, setColor] = useState<boolean>();
  const navigation = useNavigation<CoinDetailsScreenNavigationProp>();

  const { name, 
    current_price, 
    market_cap_rank, 
    price_change_percentage_24h, 
    symbol, 
    market_cap,
    image } = coin

    useEffect(() =>{
      if(price_change_percentage_24h <= 0 ) {
        setColor(true)
      } else {
        setColor(false)
      }
    }, [setColor, price_change_percentage_24h])

    const normalizeMarketCap = (marketCap: number) =>{
      if(marketCap > 1_000_000_000_000){
        return `${Math.floor(marketCap/1_000_000_000_000)} T`;
      } else if (marketCap > 1_000_000_000){
        return `${Math.floor(marketCap/1_000_000_000)} B`;
      } else if (marketCap > 1_000_000){
        return `${Math.floor(marketCap/1_000_000)} M`;
      } else if (marketCap > 1_000){
        return `${Math.floor(marketCap/1_000)} K`;
    } else {
      return marketCap
    }}

  return (
    <View className="flex flex-row  border-b-[1px] border-[#2f2f2f] p-[15px] shadow-lg align-center">
      <TouchableOpacity onPress={() => navigation.navigate("Details") }>
      <Image 
        source={{ uri: image }}
        className='h-10 w-10 '/>
      </TouchableOpacity>
      
       <View className='ml-4'>
        <Text className="text-white text-base font-bold mb-[1px]">{name}</Text>
        <View className='flex-row space-x-1 align-center items-center'>
          <View className='bg-[#585858]/75 py-1 px-2 rounded-md'>
            <Text className="text-white text-bold">{market_cap_rank}</Text>
          </View>
          
          <Text className="text-white ">{(symbol).toLocaleUpperCase()}</Text>

          { color ? (<AntDesign 
          name="caretdown" 
          size={12} 
          color="#ea3943"
          />
          ):(
          <AntDesign 
            name="caretup" 
            size={12} 
            color="#16c784"
            />)}

          <Text className={color ? "text-red-400 font-bold": "text-green-400 font-bold"}>{price_change_percentage_24h.toFixed(2)}%</Text>
        </View>
        
        
       </View>
       <View style={{ marginLeft: 'auto', alignItems: 'flex-end'}}>
          <Text className="text-white text-base font-bold">${current_price}</Text>
          <Text className="text-white text-md">MCap {normalizeMarketCap(market_cap)}</Text>
        </View>
      </View>
  )
}

export default CoinItem