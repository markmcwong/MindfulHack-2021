import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import chatBox from "../screens/chatBox";
import { ChatListScreen } from "../screens/ChatListScreen";
import ProductDetailScreen from "../screens/ProductDetail";
import SleepExercise1 from "../screens/SleepExercise1";
import SleepExercise2 from "../screens/SleepExercise2";
import SleepQuality from "../screens/SleepQuality";

const SleepNavigator = createStackNavigator();

const SleepStack = () => (
  <SleepNavigator.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="SleepQuality"
  >
    <SleepNavigator.Screen name="SleepExercise1" component={SleepExercise1} />
    <SleepNavigator.Screen name="SleepExercise2" component={SleepExercise2} />
    <SleepNavigator.Screen name="SleepQuality" component={SleepQuality} />
  </SleepNavigator.Navigator>
);

export default SleepStack;
