import React from 'react'
import { View, Image, StatusBar, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
// import {MapPinIcon} from 'react-native-heroicons/solid'
import { FaMapMarkerAlt } from 'react-icons/fa';
// import { SparklesIcon } from "react-native-heroicons/mini";
const Home = () => {
  return (
    <>
    <View style={tw `flex-1 bg-pink-600 relative`} className=''>
        <StatusBar/>
        <Image
        source={require('../assets/images/beansBackground1.png')}
        style={tw `flex-1 bg-pink-600 relative w-full absolute opacity-20 -top-5 bg-white h-[200px]`}
        />

        {/* avatar and bell icon */}
        <SafeAreaView style={tw `flex-1 absolute`} >

          <View style={tw `px-4 flex-row justify-between items-center`} >
            <Image
            source={require('../assets/images/avatar.png')}
            style={tw `h-[36px] w-[36px] rounded-full`}
            />
            <View style={tw `flex-row items-center`}>
              {/* <MapPinIcon /> */}
              {/* <FaMapMarkerAlt style={tw `h-[50px] w-[50px] `} /> */}
              {/* <SparklesIcon /> */}
              <Text style={tw `text-black text-4xl`}>React Native</Text>
            </View>
          </View>
        </SafeAreaView>
    </View>
    
    </>
  )
}

export default Home