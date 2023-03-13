import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, EvilIcons } from '@expo/vector-icons'
import CoinDetailHeader from '../components/CoinDetailScreen/CoinDetailHeader'


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
    market_data: {market_cap_rank, current_price},
 } = cryptoCurrencyDataTyped

  return (
    <View className="flex-1 bg-[#121212] pt-[50px] px-1">
      <CoinDetailHeader imgURL={small} name={name} marketCap={market_cap_rank} />
      <View className='p-[15px]'>
        <Text className='text-white text-[15px]'>{name}</Text>
        <Text className='text-white text-[30px] font-semibold' style={{letterSpacing:1}}>${current_price.usd}</Text>
      </View>
      

    </View>
  )
}

export default CoinDetailScreen