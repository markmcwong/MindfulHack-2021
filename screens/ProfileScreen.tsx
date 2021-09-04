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
} from "react-native";
import { logout } from "../services/auth";
import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import firebase from "firebase";
import "firebase/firestore";
import { getUserDetails } from "../services/firestore";

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
    <ScrollView>
      <VStack
        alignItems="center"
        width={Dimensions.get("window").width}
        height="100%"
        space={1}
        marginTop={3}
        paddingBottom={20}
      >
        <ImageBackground
          borderRadius={35}
          resizeMode="cover"
          source={
            state.user.name == "Amanda"
              ? require("../assets/images/mindfulhack_amanda.png")
              : require("../assets/images/mindfulhack_sleep_happy.png")
          }
          style={{
            height: state.user.name == "Amanda" ? 125 : 150,
            ...styles.rewards,
          }}
        ></ImageBackground>
        <Text
          marginTop={4}
          fontSize={24}
          style={styles.bold}
          fontFamily="Avenir"
        >
          {state.user.name}
        </Text>

        <View
          style={{
            width: "90%",
            borderRadius: 15,
            padding: 15,
            backgroundColor: "transparent",
          }}
        >
          <VStack>
            {/* <Text fontFamily="Avenir" style={{ ...styles.bold }}>
              About Me
            </Text> */}
          </VStack>
          <Text
            fontSize={13}
            py={2}
            marginTop={2}
            fontWeight="300"
            fontFamily="Avenir"
          >
            {/* {userDetails && userDetails.bio != ""
              ? (userDetails.bio as string).split("\\n").map((x, index) => (
                  <Text>
                    {index == 0 ? "" : "\n"}
                    {x}
                  </Text>
                ))
              : "This user has no user information yet."} */}
          </Text>
          <Divider size={2} my={5} />
        </View>
      </VStack>
    </ScrollView>
  );
};

const mapStateToProps = (state: any, props: any) => {
  return { user: state.user };
};

const ProfileScreen = (props: any) => {
  const user = useSelector((state: any) => state.user);
  useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <VStack
        alignItems="center"
        width={Dimensions.get("window").width}
        height="100%"
        marginTop={3}
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
            >
              <Icon
                size="sm"
                as={<AntDesign name="left" />}
                color="black"
                onPress={() =>
                  user.name == "Amanda"
                    ? props.navigation.goBack()
                    : props.navigation.navigate("Auth")
                }
              />
            </Text>
          </Button>

          <Icon
            size="sm"
            as={<AntDesign name="logout" />}
            color="black"
            onPress={() => logout()}
          />
        </HStack>
        <SecondRoute user={user}></SecondRoute>
      </VStack>
    </SafeAreaView>
  );
};

export default connect(mapStateToProps)(ProfileScreen);
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
  info: {
    fontWeight: "bold",
    color: "#438672",
  },
});
