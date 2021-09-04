import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import MoodExercise1 from "../screens/MoodExercise1";
import MoodExercise2 from "../screens/MoodExercise2";
import MoodBoard from "../screens/MoodBoard";

const MoodNavigator = createStackNavigator();

const MoodStack = () => (
  <MoodNavigator.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="MoodBoard"
  >
    <MoodNavigator.Screen name="MoodExercise1" component={MoodExercise1} />
    <MoodNavigator.Screen name="MoodExercise2" component={MoodExercise2} />
    <MoodNavigator.Screen name="MoodBoard" component={MoodBoard} />
  </MoodNavigator.Navigator>
);

export default MoodStack;
