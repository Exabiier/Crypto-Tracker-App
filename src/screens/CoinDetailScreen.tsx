import { View, Text, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, EvilIcons } from '@expo/vector-icons'
import CoinDetailHeader from '../components/CoinDetailScreen/CoinDetailHeader'
import { AntDesign } from '@expo/vector-icons'
import HeaderInfo from '../components/CoinDetailScreen/HeaderInfo'
// @ts-ignore
import { ChartDot, ChartPath, ChartPathProvider, monotoneCubicInterpolation, ChartYLabel } from '@rainbow-me/animated-charts';

import { interpolate } from 'react-native-reanimated'
import { Console } from 'console'


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
    prices,
    symbol,
    market_data: { market_cap_rank, current_price, price_change_percentage_24h },
 } = cryptoCurrencyDataTyped

  const [color, setColor] = useState<boolean>();
  const [ coinValue, setCoinValue ] = useState<string>("1");
  const [ usdValue, setUsdValue ] = useState<string>(current_price.usd.toString());

  useEffect(() =>{
    if(price_change_percentage_24h <= 0 ) {
      setColor(true)
    } else {
      setColor(false)
    }
  }, [setColor, price_change_percentage_24h])

  const twPercentage: string  = "p-[5px] py-2 rounded-lg flex-row items-center space-x-1";

  const twTextInput: string = "flex-1 h-[35px] m-3 border-b border-white  text-base text-white"

  const chartColor: string = current_price.usd < prices[0][1] ? "#ea3943" : "#16c784"

  const screenWidth: number = Dimensions.get('window').width;

  const formatCurrency = (value: string) => {
    "worklet";
    if(value === "") {
      return `$${current_price.usd.toFixed(2)}`
    } else {
      return `$${parseFloat(value).toFixed(2)}`
    }
  }

  const changeCoinValue = (value: string) => {
      setCoinValue(value);
      const intValue: number = parseFloat(value) || 0;
      const USDValue = (intValue*current_price.usd).toFixed(2).toString();
      setUsdValue(USDValue)
      console.warn(intValue);
      

  };

  const changeUsdValue = (value: string) => {
    setUsdValue(value);
    const intValue: number = parseFloat(value) || 0;
    const coinValueInput = (intValue/current_price.usd).toFixed(3).toString();
    setCoinValue(coinValueInput);

    
  }

  return (
    <View className="flex-1 bg-[#121212] pt-[50px] px-1">
      <ChartPathProvider data={{ points: prices.map(([x, y]) => ({ x, y })), smoothingStrategy: 'bezier' }}>
          <CoinDetailHeader imgURL={small} name={name} marketCap={market_cap_rank} />
          
          <HeaderInfo name={name} tailWindClass={twPercentage} currentPrice={current_price.usd} PriceChange={price_change_percentage_24h} color={color} />
          <View className='p-[15px] flex-row justify-between items-center'>
            <View>
              <ChartYLabel
              format={formatCurrency}
              className="text-white text-[30px] font-semibold"
              />
            </View>
          </View>
          
          <View style={{ backgroundColor: 'black' }}>
          
            <ChartPath 
            strokeWidth={2}
            height={screenWidth / 2} 
            stroke={chartColor} 
            width={screenWidth} />
            <ChartDot style={{ backgroundColor: 'blue', width: 10, height: 10, borderRadius: 5, zIndex: 1000 }} />
          
          </View>
          <View className="flex-row">
            <View className='flex-row flex-1'>
              <Text className='text-white self-center'>{symbol.toUpperCase()}</Text>
              <TextInput
              className={twTextInput}
              value={coinValue}
              keyboardType='numeric'
              onChangeText={changeCoinValue}
               />
            </View>
            <View className='flex-row flex-1'>
              <Text className='text-white self-center'>USD</Text>
              <TextInput className={twTextInput} value={usdValue}
              keyboardType='numeric'
              onChangeText={changeUsdValue}/>
              
            </View>
          </View>
        </ChartPathProvider>
    </View>
  )
}

export default CoinDetailScreen