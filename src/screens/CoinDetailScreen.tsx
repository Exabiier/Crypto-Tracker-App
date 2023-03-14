import { View, Text, TouchableOpacity, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, EvilIcons } from '@expo/vector-icons'
import CoinDetailHeader from '../components/CoinDetailScreen/CoinDetailHeader'
import { AntDesign } from '@expo/vector-icons'
import HeaderInfo from '../components/CoinDetailScreen/HeaderInfo'


type Props ={

}

const CoinDetailScreen = () => {
  const navigation = useNavigation();
  const cryptoCurrencyData: any = require('../../assets/data/crypto.json');
  const cryptoCurrencyDataTyped: CyptoCoinData = cryptoCurrencyData
  const { 
    image: { small },
    name,
    id,
    market_data: { market_cap_rank, current_price, price_change_percentage_24h },
 } = cryptoCurrencyDataTyped

  const [color, setColor] = useState<boolean>();

  useEffect(() =>{
    if(price_change_percentage_24h <= 0 ) {
      setColor(true)
    } else {
      setColor(false)
    }
  }, [setColor, price_change_percentage_24h])

  const twPercentage = "p-[5px] py-2 rounded-lg flex-row items-center space-x-1"

  return (
    <View className="flex-1 bg-[#121212] pt-[50px] px-1">
      <CoinDetailHeader imgURL={small} name={name} marketCap={market_cap_rank} />
      
      <HeaderInfo name={name} tailWindClass={twPercentage} currentPrice={current_price.usd} PriceChange={price_change_percentage_24h} color={color} />
      
      

    </View>
  )
}

export default CoinDetailScreen