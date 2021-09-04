import {
  Text,
  Fab,
  VStack,
  Icon,
  HStack,
  Pressable,
  Image,
  View,
  //   ScrollView,
  CircleIcon,
  Link,
} from "native-base";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import appTheme from "../constants/Colors";
import { ScrollView } from "react-native-gesture-handler";

import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
// import { ScrollView } from "react-native-gesture-handler";
import { marginBottom } from "styled-system";

const SleepQuality = ({ navigation, route }) => {
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
      <View
        style={{
          ...styles.container,
          // paddingBottom: 60,
        }}
      >
        <VStack alignSelf="flex-start">
          <Text
            fontWeight="900"
            fontFamily="Avenir"
            fontSize={appTheme.default.titleSize}
            style={{ marginLeft: "12%" }}
          >
            Sleep Quality
          </Text>
          <ScrollView
            style={{
              backgroundColor: "#fff",
              paddingLeft: 30,
              paddingRight: 35,
            }}
          >
            <HStack
              backgroundColor="#AADFCA"
              borderRadius={35}
              width={365}
              height={165}
              style={{
                alignContent: "flex-start",
                justifyContent: "flex-start",
                marginTop: "4%",
              }}
            >
              <VStack
                style={{
                  marginLeft: "8%",
                  alignContent: "flex-start",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/images/mindfulhack_sleepquality_piechart.png")}
                  alt="sleepDashboard"
                  width={111}
                  height={111}
                />
              </VStack>
              <VStack
                style={{
                  marginLeft: "4%",
                  marginTop: "6%",
                  alignContent: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Text
                  fontWeight="800"
                  fontFamily="Avenir"
                  color="white"
                  fontSize={20}
                  style={{ marginBottom: "3%" }}
                >
                  September
                </Text>
                <HStack>
                  <VStack width={200}>
                    <HStack
                      alignItems="center"
                      justifyContent="space-between"
                      style={{ marginBottom: "3%" }}
                    >
                      <HStack alignItems="center" justifyContent="flex-start">
                        <CircleIcon color={"#FDFFC1"} size={"14pt"} />
                        <Text
                          fontWeight="800"
                          fontFamily="Avenir"
                          color="white"
                          fontSize={14}
                          style={{ marginLeft: 8 }}
                        >
                          Very Good
                        </Text>
                      </HStack>
                      <Text
                        fontWeight="800"
                        fontFamily="Avenir"
                        color="white"
                        fontSize={14}
                        style={{ paddingRight: "10%" }}
                      >
                        28%
                      </Text>
                    </HStack>
                    <HStack
                      alignItems="center"
                      justifyContent="space-between"
                      style={{ marginBottom: "3%" }}
                    >
                      <HStack alignItems="center">
                        <CircleIcon color={"#FFD2A8"} size={"14pt"} />
                        <Text
                          fontWeight="800"
                          fontFamily="Avenir"
                          color="white"
                          fontSize={14}
                          style={{ marginLeft: 8 }}
                        >
                          Good
                        </Text>
                      </HStack>
                      <Text
                        fontWeight="800"
                        fontFamily="Avenir"
                        color="white"
                        fontSize={14}
                        style={{ paddingRight: "10%" }}
                      >
                        35%
                      </Text>
                    </HStack>
                    <HStack
                      alignItems="center"
                      justifyContent="space-between"
                      style={{ marginBottom: "3%" }}
                    >
                      <HStack alignItems="center">
                        <CircleIcon color={"#FFB8B8"} size={"14pt"} />
                        <Text
                          fontWeight="800"
                          fontFamily="Avenir"
                          color="white"
                          fontSize={14}
                          style={{ marginLeft: 8 }}
                        >
                          Bad
                        </Text>
                      </HStack>
                      <Text
                        fontWeight="800"
                        fontFamily="Avenir"
                        color="white"
                        fontSize={14}
                        style={{ paddingRight: "10%" }}
                      >
                        9%
                      </Text>
                    </HStack>
                    <HStack
                      alignItems="center"
                      justifyContent="space-between"
                      style={{ marginBottom: "3%" }}
                    >
                      <HStack alignItems="center">
                        <CircleIcon color={"#90CAFF"} size={"14pt"} />
                        <Text
                          fontWeight="800"
                          fontFamily="Avenir"
                          color="white"
                          fontSize={14}
                          style={{ marginLeft: 8 }}
                        >
                          I can't sleep
                        </Text>
                      </HStack>
                      <Text
                        fontWeight="800"
                        fontFamily="Avenir"
                        color="white"
                        fontSize={14}
                        style={{ paddingRight: "10%" }}
                      >
                        28%
                      </Text>
                    </HStack>
                  </VStack>
                </HStack>
              </VStack>
            </HStack>

            <HStack style={{ marginTop: "5%" }} alignSelf="center">
              <HStack
                backgroundColor={"#AADFCA"}
                borderRadius={25}
                justifyContent="center"
                alignItems="center"
                style={{
                  width: 180,
                  height: 90,
                  padding: "5%",
                  marginRight: "2%",
                }}
              >
                <VStack style={{ paddingLeft: 10 }}>
                  <Image
                    source={require("../assets/images/mindfulhack_sleep_happy.png")}
                    alt="sleepDashboard"
                    width={52}
                    height={62}
                  />
                </VStack>
                <VStack style={{ marginLeft: 10 }}>
                  <Text
                    fontWeight="900"
                    fontFamily="Avenir"
                    color="white"
                    fontSize={18}
                    style={{ paddingRight: "10%" }}
                  >
                    16 Times
                  </Text>
                  <Text
                    fontWeight="800"
                    fontFamily="Avenir"
                    color="white"
                    fontSize={14}
                    style={{ paddingRight: "10%" }}
                  >
                    in September
                  </Text>
                </VStack>
              </HStack>
              <HStack
                backgroundColor={"#AADFCA"}
                borderRadius={25}
                justifyContent="center"
                alignItems="center"
                style={{ width: 180, height: 90, padding: "5%" }}
              >
                <VStack style={{ paddingLeft: 10 }}>
                  <Image
                    source={require("../assets/images/mindfulhack_sleep_sad.png")}
                    alt="sleepDashboard"
                    width={52}
                    height={62}
                  />
                </VStack>
                <VStack style={{ marginLeft: 10 }}>
                  <Text
                    fontWeight="900"
                    fontFamily="Avenir"
                    color="white"
                    fontSize={18}
                    style={{ paddingRight: "10%" }}
                  >
                    11 Times
                  </Text>
                  <Text
                    fontWeight="800"
                    fontFamily="Avenir"
                    color="white"
                    fontSize={14}
                    style={{ paddingRight: "10%" }}
                  >
                    in September
                  </Text>
                </VStack>
              </HStack>
            </HStack>

            <VStack style={{ marginTop: "5%" }}>
              <Text
                fontWeight="800"
                fontFamily="Avenir"
                color="#3F3D56"
                fontSize={24}
                style={{ paddingRight: "10%" }}
              >
                Tips
              </Text>
              <Pressable
                borderWidth={2}
                borderRadius={20}
                borderColor={"#AADFCA"}
                style={{ marginBottom: "3%", marginTop: "2%" }}
              >
                <Link href="https://www.healthhub.sg/live-healthy/1189/are-you-getting-quality-sleep">
                  <HStack>
                    <VStack
                      width={24}
                      backgroundColor={"#AADFCA"}
                      borderBottomLeftRadius={18}
                      borderTopLeftRadius={18}
                      borderWidth={2}
                      borderColor={"#AADFCA"}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        source={require("../assets/images/mindfulhack_sq_tips1.png")}
                        alt="profile"
                        height={50}
                        width={50}
                      />
                    </VStack>
                    <VStack>
                      <Text
                        style={{
                          color: "#3F3D56",
                          fontFamily: "Avenir",
                          fontWeight: "700",
                          fontSize: 14,

                          paddingTop: "4%",
                          paddingLeft: 15,
                          paddingRight: "5%",
                          textAlign: "left",
                        }}
                      >
                        Improve your sleeping quality
                      </Text>
                      <Text
                        style={{
                          color: "#3F3D56",
                          fontFamily: "Avenir",
                          fontWeight: "300",
                          fontSize: "12px",

                          paddingLeft: 15,
                          paddingRight: "5%",
                          paddingBottom: "5%",
                        }}
                      >
                        by Healthhub Sg
                      </Text>
                    </VStack>
                  </HStack>
                </Link>
              </Pressable>
              <Pressable
                borderWidth={2}
                borderRadius={20}
                borderColor={"#AADFCA"}
                style={{ marginBottom: "5%" }}
                width="100%"
              >
                <Link href="https://www.healthline.com/health/snoring-remedies#_noHeaderPrefixedContent">
                  <HStack>
                    <VStack
                      width={24}
                      backgroundColor={"#AADFCA"}
                      borderBottomLeftRadius={18}
                      borderTopLeftRadius={18}
                      borderWidth={2}
                      borderColor={"#AADFCA"}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        source={require("../assets/images/mindfulhack_sq_tips2.png")}
                        alt="profile"
                        height={39}
                        width={39}
                      />
                    </VStack>
                    <VStack>
                      <Text
                        style={{
                          color: "#3F3D56",
                          fontFamily: "Avenir",
                          fontWeight: "700",
                          fontSize: 14,

                          paddingTop: "4%",
                          paddingLeft: 15,
                          paddingRight: "5%",
                          textAlign: "left",
                        }}
                      >
                        15 Tips for you to stop snoring
                      </Text>
                      <Text
                        style={{
                          color: "#3F3D56",
                          fontFamily: "Avenir",
                          fontWeight: "300",
                          fontSize: "12px",

                          paddingLeft: 15,
                          paddingRight: "5%",
                          paddingBottom: "5%",
                        }}
                      >
                        by Erica Cirino
                      </Text>
                    </VStack>
                  </HStack>
                </Link>
              </Pressable>
            </VStack>
            <VStack style={{ marginTop: "1%" }}>
              <Text
                fontWeight="800"
                fontFamily="Avenir"
                color="#3F3D56"
                fontSize={24}
                style={{ paddingRight: "10%", marginBottom: "2%" }}
              >
                Exercises
              </Text>

              <ScrollView
                horizontal
                contentContainerStyle={{ width: 460 }}
                // width="80%"
                showsHorizontalScrollIndicator={false}
              >
                <HStack>
                  <Pressable
                    backgroundColor="#AADFCA"
                    borderRadius={25}
                    minHeight={250}
                    maxHeight={250}
                    style={{ marginRight: "3%", width: 220 }}
                    onPress={() => navigation.navigate("SleepExercise1")}
                  >
                    <VStack
                      justifyContent="center"
                      alignContent="center"
                      alignItems="center"
                    >
                      <Image
                        source={require("../assets/images/mindfulhack_sq_exercise1.png")}
                        alt="happy"
                        width={200}
                        height={172}
                        borderRadius={25}
                        style={{ marginTop: "4%" }}
                      />
                      <Text
                        style={{
                          color: "#46454C",
                          fontFamily: "Avenir",
                          fontWeight: "800",
                          fontSize: 16,
                          marginTop: "5%",
                        }}
                      >
                        Getting into sleep
                      </Text>
                      <Text
                        style={{
                          color: "#46454C",
                          fontFamily: "Avenir",
                          fontWeight: "400",
                          fontSize: 14,
                          marginTop: "1%",
                        }}
                      >
                        3 Steps
                      </Text>
                    </VStack>
                  </Pressable>

                  <Pressable
                    backgroundColor="#AADFCA"
                    borderRadius={25}
                    minHeight={250}
                    maxHeight={250}
                    style={{ marginRight: "3%", width: 220 }}
                    onPress={() => navigation.navigate("SleepExercise2")}
                  >
                    <VStack
                      justifyContent="center"
                      alignContent="center"
                      alignItems="center"
                    >
                      <Image
                        source={require("../assets/images/mindfulhack_sq_exercise2.png")}
                        alt="happy"
                        width={200}
                        height={172}
                        borderRadius={25}
                        style={{ marginTop: "4%" }}
                      />
                      <Text
                        style={{
                          color: "#46454C",
                          fontFamily: "Avenir",
                          fontWeight: "800",
                          fontSize: 16,
                          marginTop: "5%",
                        }}
                      >
                        Exercises before sleep
                      </Text>
                      <Text
                        style={{
                          color: "#46454C",
                          fontFamily: "Avenir",
                          fontWeight: "400",
                          fontSize: 14,
                          marginTop: "1%",
                        }}
                      >
                        6 Steps
                      </Text>
                    </VStack>
                  </Pressable>
                </HStack>
              </ScrollView>
            </VStack>
          </ScrollView>
        </VStack>
      </View>
      <Icon
        as={MaterialCommunityIcons}
        name="arrow-left"
        color="#3F3D56"
        size={8}
        // marginTop={100}
        // left={30}
        style={{ position: "absolute", top: 46, left: 10 }}
        onPress={() => navigation.goBack()}
      />
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
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "space-between",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingLeft: 35,
    // paddingRight: 35,
  },
});

export default SleepQuality;
