import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  HStack,
  Icon,
  IconButton,
  Badge,
  StatusBar,
  VStack,
  Text,
  Image,
  Divider,
  Button,
  Pressable,
} from "native-base";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "../components/Themed";
import {
  Animated,
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  ViewBase,
} from "react-native";

import { Ionicons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

import { logout } from "../services/auth";
import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import firebase from "firebase";
import "firebase/firestore";
import { getUserDetails } from "../services/firestore";
import { backgroundColor } from "styled-system";
import Navigation from "../navigation";

const User = {
  name: "Robe Jobs",
  created: "2018-02-21",
  tags: ["programmer", "developer", "coder"],
  introduction:
    "Hello my friends :) I am Robe Jobs, would love to make some new friends while learning some languages! always find elderly like you interesting, as you have SO MUCH experiences and stories that I do not possess! Would always love to chat with you and know more about your lives ;)",
};

const SecondRoute = (state: any, props: any) => {
  const [userDetails, setUserDetails] = useState<any>(null);
  useEffect(() => {
    getUserDetails(state.user.uid, (val) => setUserDetails(val));
  }, []);
  return (
    <View>
      <VStack
        alignItems="center"
        width={Dimensions.get("window").width}
        // height="100%"
        space={1}
        marginTop={12}
      >
        <ImageBackground
          //   borderRadius={35}

          source={require("../assets/images/chanmoming.png")}
          style={{
            height: 130,

            ...styles.rewards,
          }}
        ></ImageBackground>
        <Text
          marginTop={4}
          fontSize={24}
          style={styles.bold}
          fontFamily="Avenir"
        >
          Chan Mo Ming
        </Text>
        <Text
          marginTop={2}
          fontSize={16}
          style={styles.regular}
          fontFamily="Avenir"
        >
          chanmoming@gmail.com
        </Text>
        <Button
          marginBottom="10%"
          marginTop="5%"
          style={{ width: "50%", backgroundColor: "#00595E" }}
        >
          Edit Profile
        </Button>
      </VStack>
    </View>
  );
};

const mapStateToProps = (state: any, props: any) => {
  return { user: state.user };
};

const MyAccount = (props: any) => {
  const user = useSelector((state: any) => state.user);
  useEffect(() => {}, []);

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <IconButton
        icon={<Icon as={AntDesign} name="logout" size={5}></Icon>}
        position="absolute"
        top="55px"
        right="15px"
        zIndex={3}
        onPress={() => logout()}
      ></IconButton>
      <VStack
        alignItems="center"
        width={Dimensions.get("window").width}
        // height="100%"
      >
        <HStack style={styles.topBar}>
          <Button
            mx={-5}
            my={-3}
            variant="unstyled"
            onPress={() =>
              user.name == "Amanda"
                ? props.navigation.goBack()
                : props.navigation.navigate("Auth")
            }
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "500",
                fontFamily: "Avenir",
              }}
            ></Text>
          </Button>
        </HStack>
        <SecondRoute user={user}></SecondRoute>
      </VStack>
      <View
        style={{
          width: "100%",
          borderRadius: 15,
          padding: 0,
          backgroundColor: "transparent",
        }}
      >
        <VStack>
          <HStack
            padding="3%"
            style={{
              backgroundColor: "#00595E",
              width: "100%",
            }}
          >
            <Text style={{ color: "#fff", fontFamily: "DMSans_700Bold" }}>
              Content
            </Text>
          </HStack>
          <HStack
            padding="3%"
            style={{
              width: "100%",
              borderBottomColor: "#DADADA",
              borderBottomWidth: 1,
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack>
              <Icon as={Ionicons} name="heart-outline" size={5} mr={6} ml={2} />

              <Text style={{ color: "#443E3E", fontFamily: "DMSans_700Bold" }}>
                Favourites
              </Text>
            </HStack>
            <Icon
              as={Ionicons}
              name="arrow-forward"
              size={5}
              mr={2}
              ml={2}
              textAlign="right"
            />
          </HStack>
        </VStack>

        <VStack marginTop={8}>
          <HStack
            padding="3%"
            style={{
              backgroundColor: "#00595E",
              width: "100%",
            }}
          >
            <Text style={{ color: "#fff", fontFamily: "DMSans_700Bold" }}>
              Preferences
            </Text>
          </HStack>
          <HStack
            padding="3%"
            style={{
              width: "100%",
              borderBottomColor: "#DADADA",
              borderBottomWidth: 1,
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack>
              <Icon as={Ionicons} name="language" size={5} mr={6} ml={2} />

              <Text style={{ color: "#443E3E", fontFamily: "DMSans_700Bold" }}>
                Language
              </Text>
            </HStack>
            <HStack>
              <Text style={{ color: "#777777", fontFamily: "DMSans_700Bold" }}>
                English
              </Text>
              <Icon
                as={Ionicons}
                name="arrow-forward"
                size={5}
                mr={2}
                ml={2}
                textAlign="right"
              />
            </HStack>
          </HStack>
          <HStack
            padding="3%"
            style={{
              width: "100%",
              borderBottomColor: "#DADADA",
              borderBottomWidth: 1,
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack>
              <Icon
                as={Ionicons}
                name="notifications-outline"
                size={5}
                mr={6}
                ml={2}
              />

              <Text style={{ color: "#443E3E", fontFamily: "DMSans_700Bold" }}>
                Notifications
              </Text>
            </HStack>
            <HStack>
              <Icon
                as={Ionicons}
                name="arrow-forward"
                size={5}
                mr={2}
                ml={2}
                textAlign="right"
              />
            </HStack>
          </HStack>
          <HStack
            padding="3%"
            style={{
              width: "100%",
              borderBottomColor: "#DADADA",
              borderBottomWidth: 1,
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack>
              <Icon as={MaterialIcons} name="security" size={5} mr={6} ml={2} />

              <Text style={{ color: "#443E3E", fontFamily: "DMSans_700Bold" }}>
                Location and Privacy
              </Text>
            </HStack>
            <HStack>
              <Icon
                as={Ionicons}
                name="arrow-forward"
                size={5}
                mr={2}
                ml={2}
                textAlign="right"
              />
            </HStack>
          </HStack>
        </VStack>

        {/* 3rd session */}
        <VStack marginTop={8} marginBottom={20}>
          <HStack
            padding="3%"
            style={{
              backgroundColor: "#00595E",
              width: "100%",
            }}
          >
            <Text style={{ color: "#fff", fontFamily: "DMSans_700Bold" }}>
              Quick Access
            </Text>
          </HStack>
          <HStack
            padding="3%"
            style={{
              width: "100%",
              borderBottomColor: "#DADADA",
              borderBottomWidth: 1,
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack>
              <Icon
                as={SimpleLineIcons}
                name="calculator"
                size={5}
                mr={6}
                ml={2}
              />

              <Text style={{ color: "#443E3E", fontFamily: "DMSans_700Bold" }}>
                Airline Earn Calculator
              </Text>
            </HStack>
            <HStack>
              <Icon
                as={Ionicons}
                name="arrow-forward"
                size={5}
                mr={2}
                ml={2}
                textAlign="right"
              />
            </HStack>
          </HStack>
          <Pressable onPress={() => props.navigation.navigate("Membership")}>
            <HStack
              padding="3%"
              style={{
                width: "100%",
                borderBottomColor: "#DADADA",
                borderBottomWidth: 1,
              }}
              alignItems="center"
              justifyContent="space-between"
            >
              <HStack>
                <Icon
                  as={Ionicons}
                  name="card-outline"
                  size={5}
                  mr={6}
                  ml={2}
                />

                <Text
                  style={{ color: "#443E3E", fontFamily: "DMSans_700Bold" }}
                >
                  Membership
                </Text>
              </HStack>
              <Icon
                as={Ionicons}
                name="arrow-forward"
                size={5}
                mr={2}
                ml={2}
                textAlign="right"
              />
            </HStack>
          </Pressable>

          <HStack
            padding="3%"
            style={{
              width: "100%",
              borderBottomColor: "#DADADA",
              borderBottomWidth: 1,
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack>
              <Icon
                as={Ionicons}
                name="chatbox-ellipses-outline"
                size={5}
                mr={6}
                ml={2}
              />

              <Text style={{ color: "#443E3E", fontFamily: "DMSans_700Bold" }}>
                Help Centre
              </Text>
            </HStack>
            <HStack>
              <Icon
                as={Ionicons}
                name="arrow-forward"
                size={5}
                mr={2}
                ml={2}
                textAlign="right"
              />
            </HStack>
          </HStack>
        </VStack>
      </View>
    </ScrollView>
  );
};

export default connect(mapStateToProps)(MyAccount);
const styles = StyleSheet.create({
  topBar: {
    justifyContent: "space-between",
    width: "80%",
  },
  rewards: {
    width: 125,
  },
  bulletPoints: {
    color: "#438672",
    fontWeight: "500",
  },
  title: {
    fontWeight: "300",
    opacity: 0.89,
    marginTop: 15,
  },
  bold: {
    fontWeight: "bold",
  },
  regular: {
    fontWeight: "normal",
  },
  info: {
    fontWeight: "bold",
    color: "#438672",
  },
});
