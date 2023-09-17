import React from "react";
import { View, Text, Image } from "react-native";
import { themeColors } from "../../themes";
// import '../components/styles.css/'
interface CoffeeCardProps {
  item: any;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({ item }) => {
  return (
    <View
      style={{
        borderRadius: 40,
        backgroundColor: themeColors.bgDark,
        height: 350,
        width: 250,
      }}
    >
      <View 
      style={{
        shadowColor:"black",
        shadowRadius:30,
        shadowOffset: {width:0, height:40},
        shadowOpacity:0.8
      }}
      className="flex-row justify-center -mt-12">
        <Image
          source={item.image}
          // style={{ width: 160, height: 160 }}
          // resizeMode="contain"
          className="w-40 h-40"
        />
      </View>

      <View>
        <Text className="text-2xl text-red-800">Tailwind in not apply</Text>
      </View>
    </View>
  );
};

export default CoffeeCard;
