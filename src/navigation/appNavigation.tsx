import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return;
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="favourite" component={Home} />
      <Tab.Screen name="cart" component={Home} />
    </Tab.Navigator>
  </NavigationContainer>;
}
