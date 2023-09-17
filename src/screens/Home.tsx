import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CoffeeCard from "../components/CoffeeCard";
import { FontAwesome } from "@expo/vector-icons";
import { themeColors } from "../../themes";
import { Feather } from "@expo/vector-icons";
import { categories, coffeeItems } from "../../constants";
import Carousel from "react-native-snap-carousel";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function Home() {
  const [activeCategory, setActiveCategory] = useState(1);
  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />
      <Image
        source={require("../assets/images/beansBackground1.png")}
        className="flex-1 w-full absolute opacity-20 -top-5 h-[200px]"
      />

      {/* avatar and bell icon */}
      <SafeAreaView className="flex justify-between">
        <View className="mx-4 flex-row justify-between items-center">
          <Image
            source={require("../assets/images/avatar.png")}
            className="h-[36px] w-[36px] rounded-full"
          />

          <View className="justify-between flex-row items-center space-x-2">
            <FontAwesome
              name="map-marker"
              size={25}
              color={themeColors.bgLight}
            />
            <Text className="text-base font-semibold">Karachi, Pakistan</Text>
          </View>
          <Feather name="bell" size={28} color="black" />
        </View>

        {/* search */}
        <View className="mx-5 mt-12 shadow">
          <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput
              placeholder="Search"
              className="p-4 flex-1 font-semibold text-gray-700"
            />
            <TouchableOpacity
              className="rounded-full p-2"
              style={{ backgroundColor: themeColors.bgLight }}
            >
              <Feather name="search" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      {/* categories */}
      <View className="px-5 mt-6">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          className="overflow-visible"
          renderItem={({ item }) => {
            const isActive = item.id === activeCategory;
            const activeTextClass = isActive ? "text-[#fff]" : "text-gray-700";

            return (
              <TouchableOpacity
                style={{
                  backgroundColor: isActive
                    ? themeColors.bgLight
                    : "rgba(0, 0, 0, 0.07)",
                }}
                className="p-4 px-5 rounded-full mr-2 shadow "
                onPress={() => setActiveCategory(item.id)}
              >
                <Text className={`font-semibold ${activeTextClass}`}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      {/* Carousel */}
      <View
        // style={{ backgroundColor: "transparent", zIndex: -1 }}
        className="z-999 flex flex-1 justify-center space-y-2"
      >
        <View className="">
          <Carousel
            containerCustomStyle={{ overflow: "visible" }}
            data={coffeeItems}
            renderItem={({ item }) => <CoffeeCard item={item} />}
            firstItem={1}
            inactiveSlideOpacity={0.75}
            inactiveSlideScale={0.75}
            loop={true}
            sliderWidth={400} //actual slide width
            itemWidth={250} //card width
            slideStyle={{ display: "flex", alignItems: "center" }}
          />
        </View>
      </View>
    </View>
    
  );
}
