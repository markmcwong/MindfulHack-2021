import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyAccount from "../screens/MyAccount";
import Membership from "../screens/Membership";

const SettingsNavigator = createStackNavigator();

const SettingsStack = () => (
  <SettingsNavigator.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="MyAccount"
  >
    <SettingsNavigator.Screen name="MyAccount" component={MyAccount} />
    <SettingsNavigator.Screen name="Membership" component={Membership} />
  </SettingsNavigator.Navigator>
);

export default SettingsStack;
