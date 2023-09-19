import React from "react";
import Home from "./src/screens/Home";
// import AppNavigator from "./src/navigation/appNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import NextScreen from "./src/screens/NextScreen";
import Product from "./src/screens/Product";
import { themeColors } from "./themes";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
interface TabProps {
  route: { name: string };
  focused: boolean;
  color: string;
  size: number;
}
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeTabs}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Product"
            component={Product}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Home/>
    <AppNavigator/> */}
    </>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => menuIcons(route, focused),
        tabBarStyle: {
          backgroundColor: themeColors.bgLight,
          borderRadius: 50,
          marginBottom: 10,
          height: 65,
          marginHorizontal: 20,
        },
        tabBarItemStyle: {
          // marginTop:30
        },
      })}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="favourite" component={NextScreen} />
      <Tab.Screen name="cart" component={NextScreen} />
    </Tab.Navigator>
  );
}
const menuIcons = (route: { name: string }, focused: boolean) => {
  let icon;
  if (route.name === "home") {
    icon = focused ? (
      <Ionicons name="home" size={30} color={themeColors.bgLight} />
    ) : (
      <Ionicons name="home-outline" size={30} color="white" />
    );
  } else if (route.name === "favourite") {
    icon = focused ? (
      <Ionicons name="heart" size={30} color={themeColors.bgLight} />
    ) : (
      <Ionicons name="heart-outline" size={30} color="white" />
    );
  } else if (route.name === "cart") {
    icon = focused ? (
      <Ionicons name="cart" size={30} color={themeColors.bgLight} />
    ) : (
      <Ionicons name="cart-outline" size={30} color="white" />
    );
  }
  let buttonClass = focused ? "bg-white" : "";
  return (
    <View
      className={`flex items-center justify-center rounded-full  shadow-md p-[8px] ${buttonClass}`}
    >
      {icon}
    </View>
  );
};
