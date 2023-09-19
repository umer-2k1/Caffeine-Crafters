import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { themeColors } from "../../themes";
const Product = (props: any) => {
  const item = props.route.params;
  const navigation = useNavigation();
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
        <View className="mx-4 my-2 flex-row items-center justify-between">
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
          style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          className="flex-row items-center rounded-full px-2 p-2 mt-2 space-x-2 w-20"
        >
          <Ionicons name="star" size={18} color="white" />
          <Text className="text-white text-base font-semibold">
            {item.stars}
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Product;
