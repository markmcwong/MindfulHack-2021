import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import LandingScreen from "../screens/LandingScreen";
import * as React from "react";
import SignupScreen from "../screens/SignupScreen";
import RegisterInfo from "../screens/RegisterInfo";
import RegisterPreference from "../screens/RegisterPreference";
import OfferScreen from "../screens/OfferScreen";
import OfferDetailsScreen from "../screens/OfferDetailsScreen";

const OfferNavigator = createStackNavigator();

const OfferStack = () => (
  <OfferNavigator.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Offer"
  >
    <OfferNavigator.Screen name="Offer" component={OfferScreen} />
    <OfferNavigator.Screen name="OfferDetails" component={OfferDetailsScreen} />
  </OfferNavigator.Navigator>
);

export default OfferStack;
