import { View, Text } from "react-native"; 
import { SafeAreaView } from "react-native";
import React from 'react'
import tw from 'twrnc';
const Home = ()=>{
    return(
        <>
        <SafeAreaView className='bg-gray-600 mt-2' >
            
                <Text>Hello Umer</Text>
                <Text className='text-blue-800'>Hello Umer</Text>
                <Text>Hello Umer</Text>
        </SafeAreaView>
        </>
    )
}
export default Home