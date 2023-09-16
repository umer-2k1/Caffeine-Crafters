import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Image, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { themeColors } from './themes';
import { Feather } from '@expo/vector-icons';
export default function App() {
  return (
    <View className='flex-1 relative'>
    <StatusBar/>
    <Image
    source={require('./assets/images/beansBackground1.png')}
    className='flex-1 w-full absolute opacity-20 -top-5 bg-white h-[200px]'
    />

    {/* avatar and bell icon */}
    <SafeAreaView className='flex-1 relative justify-between'  >
      <View className='px-4 flex-row justify-between items-center'>
        <Image
        source={require('./assets/images/avatar.png')}
        className='h-[36px] w-[36px] rounded-full'
        />

        <View className='flex justify-between flex-row items-center space-x-2'
        >
          <FontAwesome name="map-marker" size={25} color={themeColors.bgLight} />
          <Text className='text-base font-semibold'>Karachi, Pakistan</Text>
        </View>
        <Feather name="bell" size={28} color="black" />
      </View>
    </SafeAreaView>
</View>
  );
}
