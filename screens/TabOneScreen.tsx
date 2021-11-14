import * as React from "react";

import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Fab,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  Pressable,
  ScrollView,
  Text,
  VStack,
  View,
} from "native-base";
import {
  Dimensions,
  ImageBackground,
  Linking,
  LogBox,
  StyleSheet,
} from "react-native";
import { useEffect, useState } from "react";

import { AntDesign } from "@expo/vector-icons";
import { BarCodeScanner } from "expo-barcode-scanner";
import { connect } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { style } from "styled-system";

LogBox.ignoreAllLogs();

const categories = [
  "Electronics",
  "Fashion & Accessories",
  "Food &\nWine",
  "Home",
  "Sports &\nLeisure",
  "Concerts &\nEntertainments",
  "Travel",
  "Health &\nBeauty",
  "Cathay Merchandise",
];

const card = () => {
  return (
    <>
      <VStack
        backgroundColor="white"
        p={7}
        borderRadius="20"
        w="90%"
        height="60%"
        mt="20"
        alignItems="center"
        space={3}
      >
        <HStack justifyContent="space-between" width="100%">
          <VStack space={2}>
            <Text fontSize="16" color="lightgrey">
              Balance
            </Text>
            <Text fontSize="40" color="#00595E" fontWeight="600">
              1,800
            </Text>
            <Text fontSize="16" color="#00595E" fontWeight="500">
              Chan Mo Ming
            </Text>
          </VStack>
          <Image
            width="50"
            height="50"
            source={require("../assets/images/asia_miles.png")}
          />
        </HStack>
        <Image
          width="215"
          height="82"
          resizeMode="contain"
          source={require("../assets/images/barcode_1.png")}
        />
      </VStack>
    </>
  );
};

const TabOneScreen = (props: any) => {
  const [shouldShowCard, setShouldShowCard] = useState<boolean>(false);

  const images = [
    require("../assets/images/Electronics.png"),
    require("../assets/images/FashionAccessories.png"),
    require("../assets/images/FoodWine.png"),
    require("../assets/images/Home.png"),
    require("../assets/images/SportsLeisure.png"),
    require("../assets/images/ConcertsEntertainments.png"),
    require("../assets/images/Travel.png"),
    require("../assets/images/HealthBeauty.png"),
    require("../assets/images/CathayMerchandise.png"),
  ];

  const suggestedProducts = [
    <Image
      source={require("../assets/images/product.png")}
      // w="100"
      h="100"
      resizeMode="contain"
    />,
    <Image
      source={require("../assets/images/electronics_blue.png")}
      resizeMode="contain"
      // w="100"
      h="100"
    />,
    <Image
      source={require("../assets/images/electronics_21.png")}
      resizeMode="contain"
      // w="100"
      h="100"
    />,
  ];

  const suggestedProductCategories = [
    "Women's Clothes",
    "Electronics",
    "Electronics",
  ];
  const suggestedProductColours = ["#FFB8B8", "#7AB4E8", "#7AB4E8"];
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        height: "90%",
        backgroundColor: "white",
      }}
      mb={16}
    >
      <ScrollView>
        {shouldShowCard ? (
          <>
            <IconButton
              position="absolute"
              // backgroundColor="white"
              borderRadius={15}
              width="12"
              height="12"
              left={5}
              top={12}
              zIndex={20}
              icon={
                <Icon
                  color="#FFF"
                  as={<AntDesign name="arrowleft" />}
                  size="md"
                />
              }
              onPress={() => {
                setShouldShowCard(false);
              }}
            ></IconButton>
          </>
        ) : (
          <IconButton
            position="absolute"
            backgroundColor="white"
            borderRadius={15}
            width="12"
            height="12"
            right={5}
            top={12}
            zIndex={20}
            icon={
              <Icon color="#00595E" as={<AntDesign name="scan1" />} size="sm" />
            }
            onPress={() => {
              setShouldShowCard(true);
            }}
          ></IconButton>
        )}
        <ImageBackground
          source={require("../assets/images/home_background.png")}
          // resizeMode="cover"
          style={styles.image}
        >
          {shouldShowCard ? (
            card()
          ) : (
            <VStack
              borderRadius="500"
              borderColor="white"
              borderWidth={2.5}
              // padding="15%"
              alignItems="center"
              height={315}
              width={315}
              space={2}
              justifyContent="center"
              top={5}
            >
              <Image source={require("../assets/images/asia_miles.png")} />
              <Text
                fontSize="40"
                color="#FFF"
                fontFamily="DM Sans"
                fontWeight="bold"
              >
                1,800
              </Text>
              <Text
                fontWeight="bold"
                fontFamily="DM Sans"
                fontSize="16"
                color="#FED253"
              >
                25,000 miles to gold tier
              </Text>
            </VStack>
          )}
        </ImageBackground>

        <VStack
          width="100%"
          backgroundColor="white"
          // position="absolute" top="400"
        >
          <HStack width="100%" backgroundColor="#379196" py={4}>
            <Text fontFamily="DM Sans" fontWeight="bold" px={5} color="#FFF">
              View Details
            </Text>
          </HStack>
          <VStack>
            <VStack width="100%" space={4} flex={1} mt={6}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text
                  fontFamily="DM Sans"
                  fontWeight="bold"
                  px={5}
                  color="#00595E"
                >
                  Suggested for you
                </Text>
                <Text
                  fontFamily="DM Sans"
                  fontWeight="medium"
                  px={5}
                  color="#00595E"
                  fontSize="13"
                >
                  View All
                </Text>
              </HStack>
              <ScrollView pl={5} horizontal={true}>
                {Array.from(Array(10).keys()).map((item, index) => {
                  return (
                    <VStack
                      width="145"
                      borderWidth="1"
                      borderColor="#DFDFDF"
                      space={2}
                      borderRadius={10}
                      alignItems="center"
                      justifyContent="center"
                      p={2.5}
                      mr={2.5}
                    >
                      {suggestedProducts[index % suggestedProducts.length]}
                      <VStack
                        px={0}
                        style={{ marginLeft: "-15%" }}
                        py={0.5}
                        space={1}
                      >
                        <Text
                          fontFamily="DM Sans"
                          fontWeight="light"
                          color="#000000"
                          fontSize="10"
                          textAlign="left"
                          width="100%"
                          textAlign="left"
                        >
                          Shop 1
                        </Text>
                        <Text
                          fontFamily="DM Sans"
                          fontWeight="bold"
                          color="#00595E"
                          fontSize="11"
                          width="100%"
                          textAlign="left"
                        >
                          Product Name 1
                        </Text>
                        <HStack alignItems="center">
                          <Image
                            width={4}
                            height={4}
                            source={require("../assets/images/asia_miles.png")}
                          />
                          <Text fontSize="12">10000</Text>
                        </HStack>
                        <Badge
                          backgroundColor={
                            suggestedProductColours[
                              index % suggestedProducts.length
                            ]
                          }
                          borderRadius={10}
                          px={2}
                          py={0.5}
                        >
                          <Text color="#FFF" fontSize={10}>
                            {
                              suggestedProductCategories[
                                index % suggestedProducts.length
                              ]
                            }
                          </Text>
                        </Badge>
                      </VStack>
                    </VStack>
                  );
                })}
              </ScrollView>
              <VStack space={4} mt={2} flex={1}>
                <Text
                  fontFamily="DM Sans"
                  fontWeight="bold"
                  px={5}
                  color="#00595E"
                >
                  Shop Categories
                </Text>
                <HStack flexWrap="wrap" px={5}>
                  {categories.map((item, index) => {
                    return (
                      <Pressable
                        onPress={() =>
                          props.navigation.navigate("TabTwoScreen", {
                            screen: "ProductScreen",
                          })
                        }
                        width="29%"
                        height="100"
                        mr={4}
                        mb={4}
                        alignItems="center"
                        justifyContent="center"
                        borderRadius={15}
                        borderWidth={1}
                        borderColor="#00595E"
                      >
                        <VStack
                          // width="29%"
                          height="100"
                          // mr={4}
                          // mb={4}
                          alignItems="center"
                          justifyContent="center"

                          // resizeMode="cover"
                        >
                          <Image
                            style={styles.icon}
                            resizeMode="contain"
                            source={images[index]}
                          />
                          <Text
                            textAlign="center"
                            fontWeight="600"
                            fontSize="12"
                            color="#00595E"
                          >
                            {item}
                          </Text>
                        </VStack>
                      </Pressable>
                    );
                  })}
                </HStack>
              </VStack>
            </VStack>
          </VStack>
        </VStack>
      </ScrollView>
    </View>
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
  scrollView: {
    // height: Dimensions.get("window").height,
    height: "100%",
    width: "80%",
    alignSelf: "center",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    paddingBottom: 50,
  },
  icon: {
    height: 50,
    width: 50,
  },
  image: {
    // resizeMode: "contain",
    // flex: 1,
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    // opacity: 0.75,
    // position: "absolute",
    // aspectRatio: 1,
    // position: "absolute",
    // zIndex: -1,
  },
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
