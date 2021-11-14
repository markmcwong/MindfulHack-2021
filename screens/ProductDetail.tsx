import * as React from "react";

import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Fab,
  HStack,
  Icon,
  IconButton,
  Image,
  Modal,
  Radio,
  ScrollView,
  Slider,
  Text,
  VStack,
  View,
  ZStack,
} from "native-base";
// import { Text, View } from "../components/Themed";
import { connectTwoUsers, getUserDetails } from "../services/firestore";
import { useEffect, useState } from "react";

import { BarCodeScanner } from "expo-barcode-scanner";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import store from "../state/store";
import { useSelector } from "react-redux";

export default function ProductDetailScreen({ navigation, route }) {
  const user = useSelector((state: any) => state.user);
  const [isShown, setIsShown] = useState(true);
  const [userDetails, setUserDetails] = useState(null);
  const shouldShowFab = useSelector((state: any) => state.fab);
  const [showModal, setShowModal] = useState(false);
  const modal = () => {
    const [ratio, setRatio] = useState(0);
    const [miles, setMiles] = useState(700);

    const [value, setValue] = React.useState("one");
    return (
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>How would you like to pay?</Modal.Header>
          <Modal.Body>
            <Radio.Group
              name="myRadioGroup"
              value={value}
              onChange={(nextValue) => {
                setValue(nextValue);
              }}
            >
              <Radio value="one" my={1}>
                All by HKD ($10,000)
              </Radio>
              <Radio value="two" my={1}>
                All by Asia Miles (250,000)
              </Radio>
              <Radio value="three" my={1}>
                Mix of HKD and Asia Miles
              </Radio>
            </Radio.Group>
            {value === "three" && (
              <VStack ml={8} space={4} mt={2} justifyContent="center">
                <HStack>
                  <Text color="#00595E">HKD</Text>
                  <Slider
                    defaultValue={0}
                    minValue={0}
                    maxValue={1}
                    accessibilityLabel="hello world"
                    step={0.1}
                    flex={1}
                    mx={2}
                    value={ratio}
                    onChange={(e) => {
                      console.log(e);
                      setRatio(e);
                    }}
                  >
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                  <Image
                    // flex={1}
                    resizeMode="contain"
                    w="25"
                    h="25"
                    // source={route.params.image}
                    source={require("../assets/images/asia_miles.png")}
                  />
                </HStack>
                <HStack justifyContent="space-between" width="80%">
                  <Text color="#00595E">
                    HKD{" "}
                    {(
                      parseInt(
                        route.params.price.match(/\d/g).join("")
                      ).toFixed(0) *
                      (1 - ratio)
                    )
                      .toFixed(0)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Text>
                  <Text color="#00595E">+</Text>

                  <HStack alignItems="center">
                    <Image
                      // flex={1}
                      resizeMode="contain"
                      w="25"
                      h="25"
                      // source={route.params.image}
                      source={require("../assets/images/asia_miles.png")}
                    />
                    <Text color="#00595E">
                      {" " +
                        (
                          parseInt(
                            route.params.miles.match(/\d/g).join("")
                          ).toFixed(0) * ratio
                        )
                          .toFixed(0)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </Text>
                  </HStack>
                </HStack>
              </VStack>
            )}
          </Modal.Body>
          <Modal.Footer py={5} pr={5}>
            <HStack
              width="100%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text>{"Miles returned:\n" + miles}</Text>
              <Button.Group variant="ghost" space={2}>
                <IconButton
                  backgroundColor="#00595E"
                  borderRadius="30"
                  icon={
                    <Icon
                      as={AntDesign}
                      name="arrowright"
                      color="#FFF"
                      size={4}
                    />
                  }
                ></IconButton>
              </Button.Group>
            </HStack>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    );
  };
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
        backgroundColor: "#FFF",
        // ...styles.container,
        // paddingBottom: 60,
        flex: 1,
      }}
    >
      {modal()}

      <ScrollView>
        <View style={{ flex: 1 }} width="100%">
          <View alignItems="center">
            <Image
              // flex={1}
              resizeMode="contain"
              w="100%"
              h="200"
              m={20}
              alt="DisplayPicture"
              // source={route.params.image}
              source={route.params.image}
            />
          </View>
          <VStack w="100%" h="100%" alignItems="flex-start">
            <Box
              bg={"#00595E"}
              borderTopRadius={25}
              paddingLeft={8}
              py={7}
              h={200}
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
                  fontFamily: "DMSans_700Bold",
                  fontWeight: "800",
                  color: "#ffffff",
                }}
              >
                {route.params.name}
                {/* {userDetails && userDetails.name} */}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "DMSans_400Regular",
                  fontWeight: "800",
                  color: "#ffffff",
                  marginBottom: "-2%",
                }}
              >
                Apple
                {/* {userDetails && userDetails.name} */}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "DMSans_700Bold",
                  fontWeight: "500",
                  color: "#ffffff",
                }}
              >
                {route.params.type}
              </Text>
              <HStack
                py={3}
                style={{
                  marginBottom: "3%",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "DMSans_700Bold",
                    color: "#ffffff",
                  }}
                >
                  HKD {route.params.price} /
                </Text>
                <Image
                  // flex={1}
                  resizeMode="contain"
                  w="25"
                  h="25"
                  // source={route.params.image}
                  source={require("../assets/images/asia_miles.png")}
                />
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "DMSans_700Bold",
                    fontWeight: "500",
                    color: "#FFF",
                  }}
                >
                  {route.params.miles}
                </Text>
              </HStack>
            </Box>

            <VStack
              bg="#ffffff"
              rounded="xl"
              pl={8}
              pr={3}
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

                  // marginBottom: "5%",
                }}
              >
                Description
              </Text>
              <Text fontFamily="DMSans_400Regular" fontSize="14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non,
                cras maecenas neque interdum velit. Vel gravida purus eros, dui.
                Vitae pulvinar faucibus placerat euismod quisque ac facilisis
                libero. Purus et mi quis aenean purus venenatis velit ac netus.
              </Text>
              <VStack
                zIndex={100}
                bottom={0}
                position="absolute"
                pl={7}
                pb="180px"
                w="100%"
              >
                <Divider my={4} />

                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: "Avenir",
                    fontWeight: "800",
                    color: "#46454C",
                    marginTop: "2%",
                  }}
                >
                  Color Choices
                </Text>
                <VStack width="100%">
                  <HStack space={5} pt={4} pb={8}>
                    <Button
                      p={2.5}
                      backgroundColor="#5F5B58"
                      borderRadius={50}
                    />
                    <Button
                      p={2.5}
                      backgroundColor="#EFDDC5"
                      borderRadius={50}
                    />
                    <Button
                      p={2.5}
                      backgroundColor="#F2F3ED"
                      borderRadius={50}
                    />
                    <Button
                      p={2.5}
                      backgroundColor="#98B2C9"
                      borderRadius={50}
                    />
                  </HStack>
                  <HStack
                    width="100%"
                    justifyContent="center"
                    alignItems="center"
                    space={4}
                    zIndex={3}
                  >
                    <Button
                      backgroundColor="#FFF"
                      borderColor="#00595E"
                      borderWidth={1}
                      width="50%"
                      height="50"
                      borderRadius="10"
                      onPress={() => setShowModal(true)}
                      zIndex={20}
                      startIcon={
                        <Icon
                          color="#00595E"
                          as={<AntDesign name="shoppingcart" />}
                          size="sm"
                        />
                      }
                    >
                      <Text color="#00595E">Add to Cart</Text>
                    </Button>
                    <Button
                      backgroundColor="#00595E"
                      height="50"
                      borderRadius="10"
                      width="50%"
                      onPress={() => setShowModal(true)}
                    >
                      <Text color="#FFF">Buy Now</Text>
                    </Button>
                  </HStack>
                </VStack>
              </VStack>
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
