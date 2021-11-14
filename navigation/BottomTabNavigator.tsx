/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import * as React from "react";

import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";
import { HStack, Icon, Image, VStack } from "native-base";
import { Text, View } from "../components/Themed";

import Consultants from "../screens/Consultants";
import { Ionicons } from "@expo/vector-icons";
import OfferStack from "./OfferNavigator";
import SettingsStack from "./SettingsNavigator";

import ProductScreen from "../screens/ProductScreen";
import ShopScreen from "../screens/ShopScreen";
import TabOneScreen from "../screens/TabOneScreen";
import { TouchableOpacity } from "react-native";
import appTheme from "../constants/Colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import store from "../state/store";
import { useSelector } from "react-redux";
import MyAccount from "../screens/MyAccount";
import Membership from "../screens/Membership";
import ProductStack from "./ProductNavigator";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const user = useSelector((state: any) => state.user);
  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBar={(props) => <MyTabBar {...props} />}
      tabBarOptions={{
        activeTintColor: "#00595e",
        // "#EFB556",
        inactiveTintColor: "#c2c2c2",
        safeAreaInsets: { bottom: 10 },
        labelStyle: {
          display: "none",
        },
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          // style: { backgroundColor: "#ffffff" },
          // tabBarVisible: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={ProductStack}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="basket-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={OfferStack}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="pricetag-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabFive"
        component={SettingsStack}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="person-outline" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function MyTabBar({ state, descriptors, navigation }) {
  const user = useSelector((state: any) => state.user);
  return (
    // state.index == 1 ? (
    //   <></>
    // ) :
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#FFF",
        // height: 50,
        padding: 15,
        // borderRadius: 25,
        // justifyContent: "center",
        // alignItems: "center",
        // marginHorizontal: 30,
        borderTopColor: "lightgrey",
        borderWidth: 0.5,
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            if (index == 3) {
              store.dispatch({ type: "SHOW_FAB" });
            } else {
              store.dispatch({ type: "HIDE_FAB" });
            }
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
            style={{ flex: 1, alignItems: "center" }}
          >
            <Icon
              color={isFocused ? "#00595e" : "#c2c2c2"}
              as={options.tabBarIcon}
            ></Icon>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  const user = useSelector((state: any) => state.user);
  return (
    <TabOneStack.Navigator
      screenOptions={{
        // headerShown: false,
        // header: () => null,
        headerTitle: () => <Text></Text>,
        // headerTitleStyle: { textAlign: "left" },
        // header: () => null,
        headerStyle: {
          backgroundColor: "#FFF",
          height: 0,
          shadowOffset: { height: 0 },
        },
      }}
    >
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{
          // header: () => (
          //   <View style={{ backgroundColor: "#57B894" }}>
          //     <Text>abcx</Text>
          //   </View>
          // ),
          // header: () => null,
          headerTitle: () => <Text></Text>,
        }}
      />
      <TabOneStack.Screen
        name="TabTwoScreen"
        component={ProductStack}
        options={{
          header: () => (
            <View style={{ backgroundColor: "#57B894" }}>
              <Text>abcx</Text>
            </View>
          ),
          header: () => null,
          headerTitle: () => <Text></Text>,
        }}
      />
      {/* <TabOneStack.Screen
        name="PersonDetailScreen"
        component={PersonDetailScreen}
        options={{
          headerShown: false,
          // header: () => (
          //   <View style={{ backgroundColor: "#57B894" }}>
          //     <Text>abcx</Text>
          //   </View>
          // ),
          // header: () => null,
          // headerTitle: () => <Text></Text>,
        }}
      /> */}
    </TabOneStack.Navigator>
  );
}
