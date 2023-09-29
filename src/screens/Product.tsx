import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { themeColors } from "../../themes";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
const Product = (props: any) => {
  const item = props.route.params;
  const navigation = useNavigation();
  const [size, setSize] = useState("Small");
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = (quantity: number) => {
    setQuantity(quantity + 1);
  };
  const decrementQuantity = (quantity: number) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/beansBackground2.png")}
        style={{
          height: 300,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
        className="w-full absolute"
      />
      <SafeAreaView className="space-y-4">
        <View className="mx-4 my-1 flex-row items-center justify-between">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left-circle" size={50} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => navigation.goBack()}
            className="rounded-full border-2  border-white p-2"
          >
            <Ionicons name="heart" size={28} color={"white"} />
          </TouchableOpacity>
        </View>
        <View
          className="flex-row justify-center"
          style={{
            shadowColor: themeColors.bgDark,
            shadowRadius: 30,
            shadowOffset: { width: 0, height: 30 },
            shadowOpacity: 0.9,
          }}
        >
          <Image source={item.image} className="h-60 w-60" />
        </View>
        {/* details */}
        <View
          style={{ backgroundColor: themeColors.bgLight }}
          className="mx-4 flex-row items-center rounded-full p-2 px-4 space-x-2 w-24"
        >
          <Ionicons name="star" size={18} color="white" />
          <Text className="text-white text-base font-semibold">
            {item.stars}
          </Text>
        </View>
        {/* name and price */}
        <View className="mx-4 flex-row justify-between items-center">
          <Text
            style={{ color: themeColors.text }}
            className="text-3xl font-bold "
          >
            {item.name}
          </Text>
          <Text
            style={{ color: themeColors.text }}
            className="text-lg font-bold"
          >
            ${item.price}
          </Text>
        </View>
        {/* size */}
        <View className="mx-4 space-y-1">
          <Text
            style={{ color: themeColors.text }}
            className="text-lg font-bold"
          >
            Coffee size
          </Text>
          <View className="flex-row justify-between">
            <TouchableOpacity
              onPress={() => setSize("small")}
              style={{
                backgroundColor:
                  size === "small" ? themeColors.bgLight : "rgba(0,0,0,0.07)",
              }}
              className="p-3 px-8 rounded-full"
            >
              <Text
                className={
                  size === "small" ? "text-white" : "text-gray-700 font-medium"
                }
              >
                Small
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSize("medium")}
              style={{
                backgroundColor:
                  size === "medium" ? themeColors.bgLight : "rgba(0,0,0,0.07)",
              }}
              className="p-3 px-8 rounded-full"
            >
              <Text
                className={
                  size === "medium" ? "text-white" : "text-gray-700 font-medium"
                }
              >
                Medium
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSize("large")}
              style={{
                backgroundColor:
                  size === "large" ? themeColors.bgLight : "rgba(0,0,0,0.07)",
              }}
              className="p-3 px-8 rounded-full"
            >
              <Text
                className={
                  size === "large" ? "text-white" : "text-gray-700 font-medium"
                }
              >
                Large
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* about and desc */}
        <View className="mx-4 space-y-2">
          <Text
            style={{ color: themeColors.text }}
            className="text-lg font-bold"
          >
            About
          </Text>
          <Text style={{ color: themeColors.text }} className="text-gray-700">
            {item.desc}
          </Text>
        </View>
        <View className="mx-4 flex-row justify-between items-center">
          <View className="flex-row items-center space-x-1">
            <Text className="text-lg text-gray-700 font-semibold opacity-60">
              Volume
            </Text>
            <Text className="text-lg text-black font-bold ">{item.volume}</Text>
          </View>
          <View className="flex-row items-center space-x-4 border-2 border-gray-500 rounded-full p-1 px-4">
            <TouchableOpacity onPress={() => decrementQuantity(quantity)}>
              <AntDesign name="minus" size={20} color="black" />
            </TouchableOpacity>
            <Text
              style={{ color: themeColors.text }}
              className="font-extrabold text-base"
            >
              {quantity}
            </Text>
            <TouchableOpacity onPress={() => incrementQuantity(quantity)}>
              <AntDesign name="plus" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        {/* buy now button */}
        <View className="mx-4 flex-row justify-between items-center">
          <TouchableOpacity className="rounded-full border border-gray-500 p-3">
            <SimpleLineIcons name="handbag" size={30} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgLight }}
            className="p-[16px] rounded-full flex-1 ml-3"
          >
            <Text className="text-center text-lg font-bold text-white">
              Buy now
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Product;
