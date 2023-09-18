import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
const HomeScreen = ({ navigation }:any) => {
  return (
    <SafeAreaView>
      <View>
        <Text>HomeScreen</Text>
      </View>
      <Button
        title="Go to Next Screen"
        onPress={() => navigation.navigate("Next")}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
