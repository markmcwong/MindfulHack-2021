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

const Consultants = ({ navigation, route }) => {
  const data = [
    {
      name: "Amanda Smith",
      image: require("../assets/images/mindfulhack_amanda.png"),
      type: "Professional Psychiatrists",
    },
    {
      name: "Karen Wong",
      image: require("../assets/images/mindfulhack_karenwong.png"),
      type: "Professional Psychiatrists",
    },
    {
      name: "Ash Anderson",
      image: require("../assets/images/mindfulhack_ash.png"),
      type: "Professional Psychiatrists",
    },
  ];

  const data2 = [
    {
      name: "Robe Jobs",
      image: require("../assets/images/mindfulhack_robejobs.png"),
      type: "Amateur Psychiatrists",
    },
    {
      name: "Mary Doe",
      image: require("../assets/images/mindfulhack_marydoe.png"),
      type: "Amateur Psychiatrists",
    },
    {
      name: "Elva Chen",
      image: require("../assets/images/mindfulhack_elvachen.png"),
      type: "Amateur Psychiatrists",
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
          Consultants
        </Text>
        <Text
          fontWeight="300"
          py={13}
          fontFamily="Avenir"
          fontSize={appTheme.default.bodyTextSize}
        >
          Chat with one of our mentors or even professional psychiatrists to
          seek help and get advice!
        </Text>
      </VStack>
      <VStack alignSelf="flex-start" marginTop={5} width="100%" space={4}>
        <Text
          fontWeight="700"
          color="#FFB46E"
          fontFamily="Avenir"
          fontSize={appTheme.default.titleSize}
        >
          Professional Psychiatrists
        </Text>
        <View width={Dimensions.get("screen").width}>
          <ScrollView
            horizontal
            contentContainerStyle={{ width: 200 * 3 }}
            // width="80%"
            showsHorizontalScrollIndicator={false}
          >
            <HStack>
              {data.map((person) => (
                <Pressable
                  backgroundColor="#FFEBCB"
                  borderRadius={25}
                  minHeight={230}
                  style={{ marginRight: "3%" }}
                  onPress={() =>
                    navigation.navigate("ChatStack", {
                      screen: "PersonDetail",
                      params: {
                        name: person.name,
                        image: person.image,
                        type: person.type,
                      },
                    })
                  }
                >
                  <VStack
                    justifyContent="center"
                    alignContent="center"
                    alignItems="center"
                  >
                    <Image
                      source={person.image}
                      alt="happy"
                      width={166}
                      height={172}
                      borderRadius={25}
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
                      {person.name}
                    </Text>
                    <HStack justifyContent="flex-end">
                      {Array.apply(null, { length: 5 }).map((item) => (
                        <Icon
                          // position="absolute"
                          size="3"
                          color="#FFB46E"
                          as={AntDesign}
                          name="star"
                          style={{ marginRight: "3%" }}
                        />
                      ))}
                    </HStack>
                  </VStack>
                </Pressable>
              ))}
            </HStack>
          </ScrollView>
        </View>
      </VStack>

      <VStack alignSelf="flex-start" marginTop={5} width="100%" space={4}>
        <Text
          fontWeight="700"
          color="#FFB46E"
          fontFamily="Avenir"
          fontSize={appTheme.default.titleSize}
        >
          Amateur Consultants
        </Text>
        <View width={Dimensions.get("screen").width}>
          <ScrollView
            horizontal
            contentContainerStyle={{ width: 200 * 3 }}
            // width="80%"
            showsHorizontalScrollIndicator={false}
          >
            {/* <View height={230}> */}
            <HStack>
              {data2.map((person) => (
                <Pressable
                  borderWidth={2}
                  borderColor="#FFB46E"
                  borderRadius={25}
                  minHeight={230}
                  // width={200}
                  style={{ marginRight: "3%" }}
                  onPress={() =>
                    navigation.navigate("ChatStack", {
                      screen: "PersonDetail",
                      params: {
                        name: person.name,
                        image: person.image,
                        type: person.type,
                      },
                    })
                  }
                >
                  <VStack
                    justifyContent="center"
                    alignContent="center"
                    alignItems="center"
                  >
                    <Image
                      source={person.image}
                      alt="happy"
                      width={166}
                      height={172}
                      borderRadius={25}
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
                      {person.name}
                    </Text>
                    <HStack justifyContent="flex-end">
                      {Array.apply(null, { length: 5 }).map((item) => (
                        <Icon
                          // position="absolute"
                          size="3"
                          color="#FFB46E"
                          as={AntDesign}
                          name="star"
                          style={{ marginRight: "3%" }}
                        />
                      ))}
                    </HStack>
                  </VStack>
                </Pressable>
              ))}
            </HStack>
            {/* </View> */}
          </ScrollView>
        </View>
      </VStack>
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

export default Consultants;
