import * as React from "react";

import AuthStack from "./AuthNavigation";
import BottomTabNavigator from "./BottomTabNavigator";
import Consultants from "../screens/Consultants";
import LandingScreen from "../screens/LandingScreen";
import LoginScreen from "../screens/LoginScreen";
import NewUserStack from "./NewUserNavigator";
import NotFoundScreen from "../screens/NotFoundScreen";
import ProductDetail from "../screens/ProductDetail";
import ProfileScreen from "../screens/ProfileScreen";
import { RootStackParamList } from "../types";
import TabOneScreen from "../screens/TabOneScreen";
import { backgroundColor } from "styled-system";
import { connect } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "firebase";

const Stack = createStackNavigator<RootStackParamList>();

const mapStateToProps = (state: any, props: any) => {
  return { user: state.user };
};

const RootNavigator = (props: any) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {props.user.uid == null ? (
        // No token found, user isn't signed in
        <>
          <Stack.Screen
            options={{
              header: () => null,
              headerTitle: () => null,
            }}
            name="Landing"
            component={AuthStack}
          />
        </>
      ) : props.user.isNewUser === true ? (
        <Stack.Screen
          options={{
            header: () => null,
            headerTitle: () => null,
          }}
          name="NewUser"
          component={NewUserStack}
        />
      ) : (
        // <Stack.Screen name="NoAuth" component={AuthStack} />
        // User is signed in
        <>
          <>
            <Stack.Screen
              options={{
                header: () => null,
                headerTitle: () => null,
              }}
              name="Auth"
              component={BottomTabNavigator}
            />
            {/* <Stack.Screen name="NewJournal" component={ JournalScreen} /> */}
            {/* <Stack.Screen name="Auth" component={BottomTabNavigator} /> */}
            <Stack.Screen
              options={{
                header: () => null,
                headerTitle: () => null,
              }}
              name="PersonDetailScreen"
              component={ProductDetail}
            />
            <Stack.Screen
              options={{
                header: () => null,
                headerTitle: () => null,
              }}
              name="Profile"
              component={ProfileScreen}
            />
          </>
        </>
      )}
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
};

export default connect(mapStateToProps)(RootNavigator);
