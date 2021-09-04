import { createStackNavigator } from "@react-navigation/stack";
import { BarCodeScanner } from "expo-barcode-scanner";
import {
  VStack,
  Image,
  Button,
  HStack,
  Box,
  Avatar,
  Badge,
  Icon,
  Center,
  ZStack,
  Container,
  Fab,
  Divider,
  ScrollView,
} from "native-base";
import * as React from "react";
import { useEffect, useState } from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { connectTwoUsers, getUserDetails } from "../services/firestore";
import { useSelector } from "react-redux";
import store from "../state/store";

export default function PersonDetailScreen({ navigation, route }) {
  const user = useSelector((state: any) => state.user);
  const [isShown, setIsShown] = useState(true);
  const [userDetails, setUserDetails] = useState(null);
  const shouldShowFab = useSelector((state: any) => state.fab);
  useEffect(() => {
    store.dispatch({
      type: "SHOW_FAB",
      page: "chat",
    });
    // getUserDetails(route.params.id, (val: any) => setUserDetails(val));
  }, []);
  return (
    <View
      style={{
        // ...styles.container,
        // paddingBottom: 60,
        flex: 1,
      }}
    >
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Image
            // flex={1}
            // resizeMode="cover"
            w="100%"
            h="400"
            alt="DisplayPicture"
            source={route.params.image}
          />
          <VStack w="100%" h="100%" alignItems="flex-start">
            <Box
              bg={"#FFB46E"}
              borderTopRadius={25}
              paddingLeft={8}
              py={7}
              h={180}
              w="100%"
              alignItems="flex-start"
              style={{
                //   position: "absolute",
                marginTop: "-10%",
                // zIndex: 10,
                // borderRadius: 40,
              }}
            >
              <Text
                style={{
                  fontSize: 36,
                  fontFamily: "Avenir",
                  fontWeight: "800",
                  color: "#ffffff",

                  marginBottom: "1%",
                }}
              >
                {route.params.name}
                {/* {userDetails && userDetails.name} */}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Avenir",
                  fontWeight: "500",
                  color: "#ffffff",
                }}
              >
                {route.params.type}
              </Text>
              <Container h={12}>
                <ScrollView
                  horizontal={true}
                  // height="60%"
                  style={{
                    marginLeft: "3%",
                    marginBottom: "1%",
                    width: "100%",
                  }}
                  showsHorizontalScrollIndicator={false}
                >
                  <HStack
                    space={4}
                    width="100%"
                    // height="80%"
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    {userDetails &&
                      userDetails.languages &&
                      userDetails.languages.map((language, index) => (
                        <Badge
                          bg="#ffffff"
                          variant={"outline"}
                          colorScheme={
                            index == 0
                              ? user.isYouth
                                ? "orange"
                                : "green"
                              : "light"
                          }
                          style={{
                            alignItems: "center",
                            minWidth: 80,
                            padding: 12,
                            paddingLeft: 12,
                            paddingRight: 12,
                            // paddingBottom: 0,
                            borderRadius: 20,
                          }}
                        >
                          {language}
                        </Badge>
                      ))}
                  </HStack>
                </ScrollView>
              </Container>
            </Box>
            <VStack
              bg="#ffffff"
              rounded="xl"
              px={8}
              py={6}
              flex={1}
              space={2}
              w="100%"
              // justifyContent="flex-start"
              // alignItems="flex-start"
              style={{
                // position: "absolute",
                marginTop: "-10%",
                zIndex: 20,
                // height: "50%",
                borderRadius: 20,
                // bottom: "50%",
                // flex: 1,
                // display: "flex",
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: "Avenir",
                  fontWeight: "800",
                  color: "#46454C",

                  marginBottom: "5%",
                }}
              >
                About Me
              </Text>

              <Container h={12}>
                <HStack
                  style={{
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  {/* {userDetails &&
                    userDetails.interests &&
                    userDetails.interests.map((interest, index) => ( */}
                  <VStack justifyContent="center" alignItems="center">
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Avenir",
                        fontWeight: "600",
                        color: "#46454C",
                        marginLeft: "3%",
                        marginBottom: "1%",
                      }}
                    >
                      Experience
                    </Text>
                    <Badge
                      variant={"outline"}
                      bg="#ffffff"
                      colorScheme={"orange"}
                      style={{
                        alignItems: "center",
                        minWidth: 120,
                        minHeight: 45,
                        padding: 12,
                        // paddingLeft: 12,
                        // paddingRight: 12,
                        height: 40,
                        // paddingBottom: 0,
                        borderRadius: 25,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: "Avenir",
                          fontWeight: "200",
                          color: "#000",
                        }}
                      >
                        5 Years
                      </Text>
                    </Badge>
                  </VStack>

                  <VStack
                    justifyContent="center"
                    alignItems="center"
                    style={{ marginLeft: "3%" }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Avenir",
                        fontWeight: "600",
                        color: "#46454C",
                        marginLeft: "3%",
                        marginBottom: "1%",
                      }}
                    >
                      Patients
                    </Text>
                    <Badge
                      variant={"outline"}
                      bg="#ffffff"
                      colorScheme={"dark"}
                      style={{
                        alignItems: "center",
                        minWidth: 100,
                        minHeight: 45,
                        padding: 12,
                        paddingLeft: 12,
                        paddingRight: 12,

                        height: 40,
                        // paddingBottom: 0,
                        borderRadius: 25,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: "Avenir",
                          fontWeight: "200",
                          color: "#000",
                        }}
                      >
                        400
                      </Text>
                    </Badge>
                  </VStack>
                  <VStack
                    justifyContent="center"
                    alignItems="center"
                    style={{ marginLeft: "3%" }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Avenir",
                        fontWeight: "600",
                        color: "#46454C",
                        marginLeft: "3%",
                        marginBottom: "1%",
                      }}
                    >
                      Ratings
                    </Text>
                    <Badge
                      variant={"outline"}
                      bg="#ffffff"
                      colorScheme={"dark"}
                      style={{
                        alignItems: "center",
                        minWidth: 100,
                        minHeight: 45,
                        padding: 12,
                        paddingLeft: 12,
                        paddingRight: 12,
                        height: 40,
                        // paddingBottom: 0,
                        borderRadius: 25,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: "Avenir",
                          fontWeight: "200",
                          color: "#000",
                        }}
                      >
                        5.0/5.0
                      </Text>
                    </Badge>
                  </VStack>
                </HStack>
              </Container>
              <Text
                // flex={1}
                h="100%"
                style={{
                  // flex: 1,
                  // zIndex: 30,
                  fontSize: 14,
                  fontFamily: "Avenir",
                  fontWeight: "200",
                  color: "#46454C",
                  lineHeight: 25,
                  marginTop: "5%",
                  marginBottom: "1%",
                  // marginTop: "-30%",
                  // alignItems: "flex-start",
                  // justifyContent: "flex-start",
                }}
              >
                {userDetails && userDetails.bio != ""
                  ? (userDetails.bio as string).split("\\n").map((x, index) => (
                      <Text>
                        {index == 0 ? "" : "\n"}
                        {x}
                      </Text>
                    ))
                  : route.params.name.split(" ")[0] +
                    " here! \nWould love to hear your life stories and have a chill chat with afternoon tea!"}
              </Text>

              <Divider style={{ marginTop: "5%" }} />
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: "Avenir",
                  fontWeight: "800",
                  color: "#46454C",
                  marginTop: "2%",
                  marginBottom: "3%",
                }}
              >
                Reviews
              </Text>

              <HStack style={{ marginBottom: "3%" }}>
                <Image
                  // flex={1}
                  // resizeMode="cover"
                  h={67}
                  w={60}
                  alt="DisplayPicture"
                  source={require("../assets/images/mindfulhack_review.png")}
                />

                <VStack style={{ marginTop: "1%", marginLeft: "5%" }}>
                  <HStack alignItems="center" justifyContent="space-between">
                    <Text
                      style={{
                        // flex: 1,
                        // zIndex: 30,
                        fontSize: 16,
                        fontFamily: "Avenir",
                        fontWeight: "800",
                        color: "#46454C",

                        // marginTop: "-30%",
                        // alignItems: "flex-start",
                        // justifyContent: "flex-start",
                      }}
                    >
                      Mark Wong
                    </Text>
                    <HStack justifyContent="flex-end">
                      <Icon
                        // position="absolute"
                        size="xs"
                        color="#FFD46E"
                        as={AntDesign}
                        name="star"
                        style={{ marginRight: "3%" }}
                      />
                      <Icon
                        // position="absolute"
                        size="xs"
                        color="#FFD46E"
                        as={AntDesign}
                        name="star"
                        style={{ marginRight: "3%" }}
                      />
                      <Icon
                        // position="absolute"
                        size="xs"
                        color="#FFD46E"
                        as={AntDesign}
                        name="star"
                        style={{ marginRight: "3%" }}
                      />
                      <Icon
                        // position="absolute"
                        size="xs"
                        color="#FFD46E"
                        as={AntDesign}
                        name="star"
                        style={{ marginRight: "3%" }}
                      />
                      <Icon
                        // position="absolute"
                        size="xs"
                        color="#FFD46E"
                        as={AntDesign}
                        name="star"
                      />
                    </HStack>
                  </HStack>
                  <Text
                    style={{
                      // flex: 1,
                      // zIndex: 30,
                      fontSize: 14,
                      fontFamily: "Avenir",
                      fontWeight: "100",
                      color: "#46454C",
                      marginTop: "1%",
                      lineHeight: 20,

                      // marginTop: "-30%",
                      // alignItems: "flex-start",
                      // justifyContent: "flex-start",
                    }}
                  >
                    You provided me tons of useful advice. {"\n"}Thank you so
                    much!
                  </Text>
                </VStack>
              </HStack>

              <HStack>
                <Image
                  // flex={1}
                  // resizeMode="cover"
                  h={67}
                  w={60}
                  alt="DisplayPicture"
                  source={require("../assets/images/mindfulhack_review2.png")}
                />

                <VStack style={{ marginTop: "1%", marginLeft: "5%" }}>
                  <HStack alignItems="center" justifyContent="space-between">
                    <Text
                      style={{
                        // flex: 1,
                        // zIndex: 30,
                        fontSize: 16,
                        fontFamily: "Avenir",
                        fontWeight: "800",
                        color: "#46454C",

                        // marginTop: "-30%",
                        // alignItems: "flex-start",
                        // justifyContent: "flex-start",
                      }}
                    >
                      Karamel Ashidaj
                    </Text>
                    <HStack justifyContent="flex-end">
                      <Icon
                        // position="absolute"
                        size="xs"
                        color="#FFD46E"
                        as={AntDesign}
                        name="star"
                        style={{ marginRight: "3%" }}
                      />
                      <Icon
                        // position="absolute"
                        size="xs"
                        color="#FFD46E"
                        as={AntDesign}
                        name="star"
                        style={{ marginRight: "3%" }}
                      />
                      <Icon
                        // position="absolute"
                        size="xs"
                        color="#FFD46E"
                        as={AntDesign}
                        name="star"
                        style={{ marginRight: "3%" }}
                      />
                      <Icon
                        // position="absolute"
                        size="xs"
                        color="#FFD46E"
                        as={AntDesign}
                        name="star"
                        style={{ marginRight: "3%" }}
                      />
                      <Icon
                        // position="absolute"
                        size="xs"
                        color="#FFD46E"
                        as={AntDesign}
                        name="star"
                      />
                    </HStack>
                  </HStack>
                  <Text
                    style={{
                      // flex: 1,
                      // zIndex: 30,
                      fontSize: 14,
                      fontFamily: "Avenir",
                      fontWeight: "100",
                      color: "#46454C",
                      marginTop: "1%",
                      lineHeight: 20,

                      // marginTop: "-30%",
                      // alignItems: "flex-start",
                      // justifyContent: "flex-start",
                    }}
                  >
                    Amanda is the best consultant I have {"\n"}met so far!
                  </Text>
                </VStack>
              </HStack>

              {shouldShowFab.show &&
                shouldShowFab.page == "chat" &&
                route.params.name == "Amanda Smith" && (
                  <Fab
                    position="absolute"
                    size="sm"
                    backgroundColor={"orange"}
                    onPress={async () => {
                      const id = await connectTwoUsers([
                        user.uid,
                        "5Fjx2wrkzjgpDPhUlVSo6vCADUv2",
                      ]);
                      store.dispatch({ type: "HIDE_FAB" });
                      navigation.navigate("Conversation", {
                        id: id,
                        name: "Amanda",
                      });
                    }}
                    icon={
                      <Icon
                        // position="absolute"
                        size="sm"
                        color="white"
                        as={Ionicons}
                        name="chatbubble-outline"
                      />
                    }
                  />
                )}
            </VStack>
          </VStack>
        </View>
      </ScrollView>
      <Icon
        as={MaterialCommunityIcons}
        name="arrow-left"
        color="#000"
        size={10}
        // marginTop={100}
        left={30}
        top={16}
        position="absolute"
        // style={{ position: "absolute", top: 40, left: 30 }}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 12,
    alignItems: "center",
    overflow: "scroll",
    // justifyContent: "center",
    backgroundColor: "#ffe4b8",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  greenText: {
    color: "#147460",
  },
});
