import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

type Props = {
    name: string,
    currentPrice: number,
    tailWindClass: string,
    PriceChange: number,
    color: boolean | undefined,

}

const HeaderInfo = ({ name, currentPrice, tailWindClass, PriceChange, color }: Props) => {
  return (
    <View className='p-[15px] flex-row justify-between items-center'>
        <View>
            <Text className='text-white text-[15px]'>{name}</Text>
            <Text className='text-white text-[30px] font-semibold' style={{letterSpacing:1}}>${currentPrice}</Text>
        </View>
        <View className={color ? `bg-red-500 ${tailWindClass}`: `bg-green-500 ${tailWindClass}` }>
            <AntDesign 
            name={color ? "caretdown" : "caretup"}
            size={12} 
            color="white"
            />
            <Text className='text-white text-[17px] font-semibold'>{PriceChange.toFixed(2)}%</Text>
        </View>
    </View>
  )
}

export default HeaderInfo