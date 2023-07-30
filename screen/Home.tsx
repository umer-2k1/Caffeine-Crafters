import React from 'react'
import { View, Image, StatusBar } from 'react-native'
const Home = () => {
  return (
    <>
    <View className='flex-1 bg-pink-600 relative'>
        <StatusBar/>
        <Image
        source={require('../assets/images/beansBackground1.png')}
        className='w-full absolute opacity-10 -top-5 bg-white'
        style={{height:420}}
        />
    </View>
    
    </>
  )
}

export default Home