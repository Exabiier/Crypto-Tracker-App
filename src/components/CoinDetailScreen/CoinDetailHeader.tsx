import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, EvilIcons } from '@expo/vector-icons'

type Props={
    imgURL: string,
    name: string,
    marketCap: number,
}

const CoinDetailHeader = ({ imgURL, name, marketCap }:Props) => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    return (
    <View className='flex-row pt-2 justify-between items-center'>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="chevron-back-sharp" size={30} color="white"/>
        </TouchableOpacity>
        <View className='flex-row items-center space-x-1 '>
            <Image source={{ uri: imgURL }} style={{width: 25, height:25 }} />
            <Text className='text-white font-bold text-[16px]'>{name}</Text>
            <View className='bg-[#585858]/75 py-1 px-2 rounded-md'>
                <Text className='text-white font-bold text-[15px]'>#{marketCap}</Text>
            </View>
        </View>
        <EvilIcons name="user" size={30} color="white"/>
    </View>
  )
}

export default CoinDetailHeader