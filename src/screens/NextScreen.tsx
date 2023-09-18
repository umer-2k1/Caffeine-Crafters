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
const NextScreen = ({navigation}:any) => {
  return (
    <SafeAreaView>
      <View>
        <Text>NextScreen</Text>
      </View>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate("Home")}
      />
    </SafeAreaView>
  );
};

export default NextScreen;
