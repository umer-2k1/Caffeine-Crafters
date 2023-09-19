import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { themeColors } from "../../themes";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// interface CoffeeItem {
//   id: number;
//   name: string;
//   price: string;
//   volume: string;
//   stars: string;
//   image: any;
//   desc: string;
// }

// interface CoffeeCardProps {
//   item: CoffeeItem;
// }

// const CoffeeCard: React.FC<CoffeeCardProps> = ({ item }) => {
const CoffeeCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        borderRadius: 40,
        backgroundColor: themeColors.bgDark,
        height: 380,
        width: 250,
      }}
    >
      <View
        style={{
          shadowColor: "black",
          shadowRadius: 30,
          shadowOffset: { width: 0, height: 40 },
          shadowOpacity: 0.8,
        }}
        className="flex-row justify-center -mt-6 "
      >
        <Image
          source={item.image}
          // style={{ width: 160, height: 160 }}
          // resizeMode="contain"
          className="w-40 h-40 -z-1"
        />
      </View>

      {/* <View className="px-5 flex-1 justify-between"> */}
      <View className="px-5 mt-5 space-y-3">
        <Text className="text-3xl text-white font-semibold z-10">
          {item.name}
        </Text>
        <View
          style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          className="flex-row items-center rounded-full px-2 p-2 mt-2 space-x-2 w-20"
        >
          <Ionicons name="star" size={18} color="white" />
          <Text className="text-white text-base font-semibold">
            {item.stars}
          </Text>
        </View>
        <View className="flex-row space-x-2 px-2 items-center ">
          <Text className="text-white font-semibold text-lg opacity-60">
            Volume
          </Text>
          <Text className="text-base text-white font-bold">{item.volume}</Text>
        </View>

        {/* price */}
        <View
          // style={{
          //   backgroundColor: themeColors.bgDark,
          //   shadowColor: themeColors.bgDark,
          //   shadowRadius: 25,
          //   shadowOffset: {width:0, height:40},
          //   shadowOpacity:0.8
          // }}
          className="flex-row justify-between items-center"
        >
          <Text className="text-white font-bold text-lg">$ {item.price}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Product", { ...item })}
            className="p-4 bg-white rounded-full"
            style={{
              shadowColor: "black",
              shadowRadius: 40,
              shadowOffset: { width: -20, height: -10 },
              shadowOpacity: 1,
            }}
          >
            <AntDesign name="plus" size={25} color={themeColors.bgDark} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CoffeeCard;
