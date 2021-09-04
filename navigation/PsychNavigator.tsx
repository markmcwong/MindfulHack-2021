import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import chatBox from "../screens/chatBox";
import { ChatListScreen } from "../screens/ChatListScreen";
import ProfileScreen from "../screens/ProfileScreen";

const PsychNavigator = createStackNavigator();

const PsychStack = () => (
  <PsychNavigator.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="ChatList"
  >
    <PsychNavigator.Screen name="ChatList" component={ChatListScreen} />
    <PsychNavigator.Screen name="Conversation" component={chatBox} />
    <PsychNavigator.Screen name="Profile" component={ProfileScreen} />
  </PsychNavigator.Navigator>
);

export default PsychStack;
