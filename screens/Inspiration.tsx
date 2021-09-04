import {
  Text,
  Fab,
  VStack,
  Icon,
  HStack,
  Pressable,
  Image,
  View,
  ScrollView,
} from "native-base";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import appTheme from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
// import { ScrollView } from "react-native-gesture-handler";
import { marginBottom } from "styled-system";

const Inspiration = ({ navigation, route }) => {
  const data = [
    {
      title: "Title",
      thoughts: "Content",
    },
    {
      title: "Title",
      thoughts: "Content",
    },
    {
      title: "Title",
      thoughts: "Content",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <VStack alignSelf="flex-start">
        <Text
          fontWeight="800"
          fontFamily="Avenir"
          fontSize={appTheme.default.titleSize}
        >
          Inspirations
        </Text>
        <Text
          fontWeight="300"
          py={13}
          fontFamily="Avenir"
          fontSize={appTheme.default.bodyTextSize}
        >
          Scroll and click to see your personalised dashboards. Find out more to
          get pro tips and exercises!
        </Text>
      </VStack>
      <ScrollView w="100%" showsVerticalScrollIndicator={false}>
        <VStack
          alignSelf="flex-start"
          marginTop={2}
          width="100%"
          space={4}
          paddingBottom={85}
        >
          <Pressable
            backgroundColor="#C2ECDA"
            borderRadius={25}
            minHeight={340}
            // width={200}
            onPress={() => navigation.navigate("SleepStack")}
            style={{ marginRight: "3%", padding: "8%" }}
          >
            <Text
              fontWeight="400"
              fontFamily="Avenir"
              fontSize={16}
              color="#3F3D56"
            >
              Your
            </Text>
            <Text
              fontWeight="700"
              fontFamily="Avenir"
              fontSize={24}
              color="#3F3D56"
            >
              Sleep Quality
            </Text>
            <Image
              source={require("../assets/images/mindfulhack_sleep.png")}
              alt="sleepDashboard"
              style={{ marginLeft: "14%", alignSelf: "center" }}
              width={310}
              height={230}
            />
          </Pressable>
          <Pressable
            backgroundColor="#FFB8B8"
            borderRadius={25}
            minHeight={340}
            // width={200}
            style={{ marginRight: "3%", padding: "8%" }}
            onPress={() => navigation.navigate("MoodStack")}
          >
            <Text
              fontWeight="400"
              fontFamily="Avenir"
              fontSize={16}
              color="#3F3D56"
            >
              Your
            </Text>
            <Text
              fontWeight="700"
              fontFamily="Avenir"
              fontSize={24}
              color="#3F3D56"
            >
              Mood Board
            </Text>
            <Image
              source={require("../assets/images/mindfulhack_mood.png")}
              alt="moodDashboard"
              style={{ marginLeft: "6%", alignSelf: "center" }}
              width={310}
              height={230}
            />
          </Pressable>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  fab: {
    backgroundColor: appTheme.default.blue,
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 },
  },
  container: {
    // flex: 1,
    // justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 35,
    paddingRight: 35,
  },
});

export default Inspiration;
