import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import LandingScreen from "../screens/LandingScreen";
import * as React from "react";
import SignupScreen from "../screens/SignupScreen";
import RegisterInfo from "../screens/RegisterInfo";
import RegisterPreference from "../screens/RegisterPreference";

const NewUserhNavigator = createStackNavigator();

const NewUserStack = () => (
  <NewUserhNavigator.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="RegisterInfo"
  >
    <NewUserhNavigator.Screen name="FirstTime" component={RegisterInfo} />
    <NewUserhNavigator.Screen name="NextTime" component={RegisterPreference} />
  </NewUserhNavigator.Navigator>
);

export default NewUserStack;
