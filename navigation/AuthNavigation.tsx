import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import LandingScreen from "../screens/LandingScreen";
import * as React from "react";
import SignupScreen from "../screens/SignupScreen";

const AuthNavigator = createStackNavigator();

const AuthStack = () => (
  <AuthNavigator.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Landing"
  >
    <AuthNavigator.Screen name="Landing" component={LandingScreen} />
    <AuthNavigator.Screen name="Login" component={LoginScreen} />
    <AuthNavigator.Screen name="Signup" component={SignupScreen} />
  </AuthNavigator.Navigator>
);

export default AuthStack;
