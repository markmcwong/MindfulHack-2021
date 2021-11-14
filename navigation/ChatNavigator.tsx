import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import chatBox from "../screens/chatBox";
import { ChatListScreen } from "../screens/ChatListScreen";
import ProductDetailScreen from "../screens/ProductDetail";

const ChatNavigator = createStackNavigator();

const ChatStack = () => (
  <ChatNavigator.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="PersonDetail"
  >
    <ChatNavigator.Screen name="PersonDetail" component={ProductDetailScreen} />
    {/* <ChatNavigator.Screen name="ChatList" component={ChatListScreen} /> */}
    <ChatNavigator.Screen name="Conversation" component={chatBox} />
  </ChatNavigator.Navigator>
);

export default ChatStack;
