import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import * as React from "react";
import firebase from "firebase";
import NotFoundScreen from "../screens/NotFoundScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import AuthStack from "./AuthNavigation";
import { connect } from "react-redux";
import ProductDetail from "../screens/ProductDetail";
import chatBox from "../screens/chatBox";
import NewUserStack from "./NewUserNavigator";
import JournalScreen from "../screens/JournalScreen";
import JournalCraftingScreen from "../screens/JournalCraftingScreen";
import LandingScreen from "../screens/LandingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import TabOneScreen from "../screens/TabOneScreen";
import Consultants from "../screens/Consultants";
import Inspiration from "../screens/Inspiration";
import SleepQuality from "../screens/SleepQuality";
import { backgroundColor } from "styled-system";
import ChatStack from "./ChatNavigator";
import MoodBoard from "../screens/MoodBoard";
import SleepExercise1 from "../screens/SleepExercise1";
import ProfileScreen from "../screens/ProfileScreen";
import PsychStack from "./PsychNavigator";
import SleepExercise2 from "../screens/SleepExercise2";
import MoodExercise1 from "../screens/MoodExercise1";
import MoodExercise2 from "../screens/MoodExercise2";
import SleepStack from "./SleepNavigator";
import MoodStack from "./MoodNavigator";
import JournalViewScreen from "../screens/JournalViewScreen";

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
              name="NewJournal"
              component={JournalCraftingScreen}
            />
            <Stack.Screen
              options={{
                header: () => null,
                headerTitle: () => null,
              }}
              name="ViewJournal"
              component={JournalViewScreen}
            />
            <Stack.Screen
              options={{
                header: () => null,
                headerTitle: () => null,
              }}
              name="SleepStack"
              component={SleepStack}
            />
            <Stack.Screen
              options={{
                header: () => null,
                headerTitle: () => null,
              }}
              name="MoodStack"
              component={MoodStack}
            />
            <Stack.Screen
              options={{
                header: () => null,
                headerTitle: () => null,
              }}
              name="ChatStack"
              component={ChatStack}
            />
            <Stack.Screen
              options={{
                header: () => null,
                headerTitle: () => null,
              }}
              name="Profile"
              component={ProfileScreen}
            />
            <Stack.Screen
              options={{
                header: () => null,
                headerTitle: () => null,
              }}
              name="Conversation"
              component={chatBox}
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
