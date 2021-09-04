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
  Fab,
  Pressable,
  IconButton,
  Icon,
  View,
  Text,
  Divider,
  Link,
} from "native-base";
import * as React from "react";
import { useEffect, useState } from "react";
import { LogBox, StyleSheet, Linking } from "react-native";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

LogBox.ignoreAllLogs();

export function LogoTitle(user: any) {
  return (
    <VStack
      alignItems="flex-start"
      // width="100%"
      space={3}
      left={8}
      // marginTop={30}
    >
      <Text fontFamily="Avenir" style={{ fontSize: 16, color: "#FFF" }}>
        Welcome!
      </Text>
      <Text
        fontFamily="Avenir"
        fontWeight="800"
        style={{ fontSize: 24, color: "#FFF", marginTop: -5 }}
      >
        {user.name}
      </Text>
    </VStack>
  );
}

const TabOneScreen = (props: any) => {
  const [lastPressedFeeling, setLastPressedFeeling] = useState<any>(null);
  const [lastPressedSleep, setLastPressedSleep] = useState<any>(null);

  return (
    <>
      <HStack
        style={{
          backgroundColor: "#FEA2A2",
          alignSelf: "start",
          alignItems: "center",
          justifyContent: "space-between",
          // position: "absolute",
          height: 100,
          width: "100%",
          // borderBottomLeftRadius: 20,
          // borderBottomRightRadius: 20,
        }}
      >
        {LogoTitle(props.user)}
        <Button
          variant="unstyled"
          onPress={() => props.navigation.navigate("Profile")}
        >
          <Image
            source={require("../assets/images/mindfulhack_sleep_happy.png")}
            alt="profile"
            height={50}
            width={50}
            // marginTop={30}
            marginRight={25}
            borderRadius={25}
          />
        </Button>
      </HStack>

      <ScrollView style={{ backgroundColor: "#fff" }}>
        <View
          style={{
            ...styles.container,
            paddingBottom: 60,
          }}
        >
          <VStack
            style={{
              backgroundColor: "#fff",
              alignItems: "center",

              // position: "absolute",

              width: "100%",
              // borderBottomLeftRadius: 20,
              // borderBottomRightRadius: 20,
            }}
          >
            <Text
              style={{
                color: "#FEA2A2",
                fontFamily: "Avenir",
                fontWeight: "800",
                fontSize: "22px",
              }}
            >
              How do you feel today?
            </Text>
            <Text
              style={{
                color: "#656565",
                fontFamily: "Avenir",
                fontWeight: "400",
                fontSize: "12px",
                marginBottom: "5%",
              }}
            >
              This will be recorded automatically at the end of the day
            </Text>
            <HStack>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor:
                      lastPressedFeeling == "Happy" ? "#FEA2A2" : "white",
                  },
                ]}
                p={2}
                alignItems="center"
                justifyContent="center"
                borderWidth={1}
                borderRadius={25}
                width={32}
                height={24}
                borderColor="#FEA2A2"
                marginRight="5%"
                borderWidth={2}
                onPress={() =>
                  lastPressedFeeling == "Happy"
                    ? setLastPressedFeeling(null)
                    : setLastPressedFeeling("Happy")
                }
              >
                <Image
                  source={require("../assets/images/mindfulhack_happy.png")}
                  alt="happy"
                  width={16}
                  height={16}
                  borderRadius={25}
                />
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor:
                      lastPressedFeeling == "Joyful" ? "#FEA2A2" : "white",
                  },
                ]}
                p={2}
                alignItems="center"
                justifyContent="center"
                borderWidth={1}
                borderRadius={25}
                width={32}
                height={24}
                borderColor="#FEA2A2"
                borderWidth={2}
                onPress={() =>
                  lastPressedFeeling == "Joyful"
                    ? setLastPressedFeeling(null)
                    : setLastPressedFeeling("Joyful")
                }
              >
                <Image
                  source={require("../assets/images/mindfulhack_joyful.png")}
                  alt="joyful"
                  width={16}
                  height={16}
                  borderRadius={25}
                />
              </Pressable>
            </HStack>

            <HStack style={{ marginTop: "3%", marginBottom: "5%" }}>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor:
                      lastPressedFeeling == "Anxious" ? "#FEA2A2" : "white",
                  },
                ]}
                p={2}
                alignItems="center"
                justifyContent="center"
                borderWidth={1}
                borderRadius={25}
                width={32}
                height={24}
                borderColor="#FEA2A2"
                marginRight="5%"
                borderWidth={2}
                onPress={() =>
                  lastPressedFeeling == "Anxious"
                    ? setLastPressedFeeling(null)
                    : setLastPressedFeeling("Anxious")
                }
              >
                <Image
                  source={require("../assets/images/mindfulhack_anxious.png")}
                  alt="anxious"
                  width={16}
                  height={16}
                  borderRadius={25}
                />
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor:
                      lastPressedFeeling == "Sad" ? "#FEA2A2" : "white",
                  },
                ]}
                p={2}
                alignItems="center"
                justifyContent="center"
                borderWidth={1}
                borderRadius={25}
                width={32}
                height={24}
                borderColor="#FEA2A2"
                borderWidth={2}
                onPress={() =>
                  lastPressedFeeling == "Sad"
                    ? setLastPressedFeeling(null)
                    : setLastPressedFeeling("Sad")
                }
              >
                <Image
                  source={require("../assets/images/mindfulhack_sad.png")}
                  alt="sad"
                  width={16}
                  height={16}
                  borderRadius={25}
                />
              </Pressable>
            </HStack>
          </VStack>

          <VStack
            style={{
              backgroundColor: "#FEA2A2",
              alignItems: "center",

              // position: "absolute",

              width: "100%",
              // borderBottomLeftRadius: 20,
              // borderBottomRightRadius: 20,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: "Avenir",
                fontWeight: "800",
                fontSize: "20px",
                marginTop: "5%",
                textAlign: "center",
              }}
            >
              Did you sleep well yesterday?
            </Text>
            <Text
              style={{
                color: "#fff",
                fontFamily: "Avenir",
                fontWeight: "400",
                fontSize: "12px",
                marginBottom: "5%",
              }}
            >
              This will be recorded automatically at the end of the day
            </Text>
            <HStack>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor:
                      lastPressedSleep == "Very Good" ? "#fff" : "#FEA2A2",
                  },
                ]}
                p={2}
                alignItems="center"
                justifyContent="center"
                borderWidth={1}
                borderRadius={25}
                width={32}
                height={12}
                borderColor="#fff"
                marginRight="5%"
                borderWidth={2}
                onPress={() =>
                  lastPressedSleep == "Very Good"
                    ? setLastPressedSleep(null)
                    : setLastPressedSleep("Very Good")
                }
              >
                <Text
                  style={{
                    color: lastPressedSleep == "Very Good" ? "#FEA2A2" : "#fff",
                  }}
                >
                  Very Good
                </Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor:
                      lastPressedSleep == "Good" ? "#fff" : "#FEA2A2",
                  },
                ]}
                p={2}
                alignItems="center"
                justifyContent="center"
                borderWidth={1}
                borderRadius={25}
                width={32}
                height={12}
                borderColor="#fff"
                marginRight="5%"
                borderWidth={2}
                onPress={() =>
                  lastPressedSleep == "Good"
                    ? setLastPressedSleep(null)
                    : setLastPressedSleep("Good")
                }
              >
                <Text
                  style={{
                    color: lastPressedSleep == "Good" ? "#FEA2A2" : "#fff",
                  }}
                >
                  Good
                </Text>
              </Pressable>
            </HStack>

            <HStack style={{ marginTop: "3%", marginBottom: "5%" }}>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor:
                      lastPressedSleep == "Bad" ? "#fff" : "#FEA2A2",
                  },
                ]}
                p={2}
                alignItems="center"
                justifyContent="center"
                borderWidth={1}
                borderRadius={25}
                width={32}
                height={12}
                borderColor="#fff"
                marginRight="5%"
                borderWidth={2}
                onPress={() =>
                  lastPressedSleep == "Bad"
                    ? setLastPressedSleep(null)
                    : setLastPressedSleep("Bad")
                }
              >
                <Text
                  style={{
                    color: lastPressedSleep == "Bad" ? "#FEA2A2" : "#fff",
                  }}
                >
                  Bad
                </Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor:
                      lastPressedSleep == "I can't sleep" ? "#fff" : "#FEA2A2",
                  },
                ]}
                p={2}
                alignItems="center"
                justifyContent="center"
                borderWidth={1}
                borderRadius={25}
                width={32}
                height={12}
                borderColor="#fff"
                marginRight="5%"
                borderWidth={2}
                onPress={() =>
                  lastPressedSleep == "I can't sleep"
                    ? setLastPressedSleep(null)
                    : setLastPressedSleep("I can't sleep")
                }
              >
                <Text
                  style={{
                    color:
                      lastPressedSleep == "I can't sleep" ? "#FEA2A2" : "#fff",
                  }}
                >
                  I can't sleep
                </Text>
              </Pressable>
            </HStack>
          </VStack>
          <VStack>
            <Text
              style={{
                color: "#6EA68E",
                fontFamily: "Avenir",
                fontWeight: "800",
                fontSize: "20px",
                marginTop: "10%",
                marginBottom: "2%",
                textAlign: "center",
              }}
            >
              A Recommended Article For You
            </Text>
            <Pressable
              borderWidth={2}
              borderRadius={30}
              borderColor={"#AADFCA"}
              style={{ marginBottom: "10%" }}
              onPress={() =>
                Linking.openURL(
                  "https://marieskelton.com/start-your-day-in-a-happy-mood/"
                )
              }
            >
              <Link href="https://marieskelton.com/start-your-day-in-a-happy-mood/">
                <HStack>
                  <VStack
                    width={24}
                    backgroundColor={"#AADFCA"}
                    borderBottomLeftRadius={28}
                    borderTopLeftRadius={28}
                    borderWidth={2}
                    borderColor={"#AADFCA"}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      source={require("../assets/images/mindfulhack_tips.png")}
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
                        fontWeight: "600",
                        fontSize: "16px",

                        paddingTop: "3%",
                        paddingLeft: "3%",
                        paddingRight: "5%",
                        textAlign: "left",
                      }}
                    >
                      Begin a day with good mood
                    </Text>
                    <Text
                      style={{
                        color: "#3F3D56",
                        fontFamily: "Avenir",
                        fontWeight: "300",
                        fontSize: "12px",

                        paddingLeft: "6%",
                        paddingRight: "5%",
                        paddingBottom: "5%",
                      }}
                    >
                      by Marie
                    </Text>
                  </VStack>
                </HStack>
              </Link>
            </Pressable>
          </VStack>

          <VStack
            style={{
              backgroundColor: "#FFB46E",
              alignItems: "center",

              // position: "absolute",

              width: "100%",
              // borderBottomLeftRadius: 20,
              // borderBottomRightRadius: 20,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: "Avenir",
                fontWeight: "800",
                fontSize: "20px",
                marginTop: "8%",
                textAlign: "center",
              }}
            >
              Want someone to talk to {"\n"} or get some advice?
            </Text>
            <Button
              width={300}
              height={60}
              backgroundColor="#fff"
              marginTop={5}
              borderRadius={25}
              onPress={() => props.navigation.navigate("TabFour")}
            >
              <Text
                style={{
                  color: "#FFB46E",
                  fontFamily: "Avenir",
                  fontWeight: "800",
                  fontSize: "20px",

                  textAlign: "center",
                }}
              >
                Find our consultants!
              </Text>
            </Button>
            <Image
              source={require("../assets/images/mindfulhack_dashboard_consultant.png")}
              alt="profile"
              height={350}
              width="100%"
              borderRadius={25}
              marginTop={10}
            />
          </VStack>
          <VStack
            style={{
              backgroundColor: "#fff",
              alignItems: "center",

              // position: "absolute",

              width: "100%",
              // borderBottomLeftRadius: 20,
              // borderBottomRightRadius: 20,
            }}
          >
            <Text
              style={{
                color: "#73BCFF",
                fontFamily: "Avenir",
                fontWeight: "800",
                fontSize: "22px",
                marginTop: "8%",
                textAlign: "center",
              }}
            >
              What are you thinking?
            </Text>
            <Image
              source={require("../assets/images/mindfulhack_dashboard_journal.png")}
              alt="profile"
              width={300}
              height={173}
              marginTop={10}
            />
            <Button
              width={300}
              height={60}
              backgroundColor="#73BCFF"
              borderRadius={25}
              onPress={() => props.navigation.navigate("TabFive")}
            >
              Write it in the journal!
            </Button>
          </VStack>
          <Divider style={{ marginTop: "10%" }} />
          <Text
            style={{
              color: "#2F2E41",
              fontFamily: "Avenir",
              fontWeight: "200",
              fontSize: "18px",
              marginTop: "8%",
              textAlign: "center",
            }}
          >
            You are supported by
          </Text>
          <Image
            source={require("../assets/images/SciKick.png")}
            alt="profile"
            width={215}
            height={55}
            marginTop={2}
            marginBottom={20}
          />
        </View>
      </ScrollView>
    </>
  );
};

const mapStateToProps = (state: any, props: any) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(TabOneScreen);
// const AuthNavigator = createStackNavigator();
// const DepositStack = ({ navigation }) => (
//   <AuthNavigator.Navigator
//     screenOptions={{ headerShown: false }}
//     initialRouteName="Form"
//   >
//     <AuthNavigator.Screen name="Scan" component={TabOneScreen} />

//     {/* <AuthNavigator.Screen name="Signup" component={SignupScreen} /> */}
//   </AuthNavigator.Navigator>
// );
// export default DepositStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 12,
    alignItems: "center",
    overflow: "scroll",
    // justifyContent: "center",
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
