import * as React from "react";

import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  Button,
  HStack,
  Icon,
  IconButton,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "native-base";

const items = [
  {
    name: "iPhone 13 Pro Max",
    price: "$9,399",
    miles: "234,975",
    image: require("../assets/images/electronics_13.png"),
  },
  {
    name: "iPhone 12 Mini",
    price: "$5,199",
    miles: "129,975",
    image: require("../assets/images/electronics_12.png"),
  },
  {
    name: "iPhone 12",
    price: "$9,399",
    miles: "234,975",
    image: require("../assets/images/electronics_12.png"),
  },
  {
    name: "iPad Pro 2021",
    price: "$9,399",
    miles: "234,975",
    image: require("../assets/images/electronics_21.png"),
  },
  {
    name: "iPhone 13 Pro Max",
    price: "$9,399",
    miles: "234,975",
    image: require("../assets/images/electronics_13.png"),
  },
  {
    name: "iPhone 12 Mini",
    price: "$5,199",
    miles: "129,975",
    image: require("../assets/images/electronics_12.png"),
  },
];

export default function ProductScreen({ navigation, route }) {
  return (
    <ScrollView
      backgroundColor="white"
      flex={1}
      zIndex={100}
      marginBottom="60px"
    >
      <IconButton
        position="absolute"
        backgroundColor="#00595E"
        borderRadius={50}
        width="8"
        height="8"
        left={5}
        top={12}
        zIndex={20}
        icon={
          <Icon color="#FFF" as={<AntDesign name="arrowleft" />} size={4} />
        }
        onPress={() => navigation.goBack()}
      ></IconButton>
      <Image source={require("../assets/images/product_banner.png")}></Image>
      <VStack space={3} my={5} ml={5}>
        <HStack alignItems="center" justifyContent="space-between" mr={5}>
          <Text
            fontSize="32"
            color="#00595E"
            fontWeight="bold"
            fontFamily="DMSans_700Bold"
          >
            Electronics
          </Text>
          <HStack>
            <IconButton
              icon={<Icon as={Ionicons} name="search" size={6} />}
            ></IconButton>
            <IconButton
              icon={<Icon as={Ionicons} name="camera-outline" size={6} />}
            ></IconButton>
          </HStack>
        </HStack>
        <ScrollView horizontal={true}>
          <HStack alignItems="center" space={3}>
            <Button
              bg="#00595e"
              borderRadius={10}
              startIcon={
                <Icon color="white" as={Ionicons} name="filter" size={4} />
              }
            >
              <Text color="white" fontFamily="DMSans_400Regular" fontSize="12">
                Filter
              </Text>
            </Button>
            <Button
              bg="white"
              borderRadius={10}
              endIcon={
                <Icon color="#00595e" as={Ionicons} name="close" size={4} />
              }
              borderColor="#00595e"
              borderWidth={1}
            >
              <Text
                color="#00595e"
                fontFamily="DMSans_400Regular"
                fontSize="12"
              >
                Brand: Apple
              </Text>
            </Button>
            <Button
              bg="white"
              borderRadius={10}
              mr={3}
              endIcon={
                <Icon color="#00595e" as={Ionicons} name="close" size={4} />
              }
              borderColor="#00595e"
              borderWidth={1}
            >
              <Text
                color="#00595e"
                fontFamily="DMSans_400Regular"
                fontSize="12"
              >
                Type: Phone & Tablet
              </Text>
            </Button>
          </HStack>
        </ScrollView>
        <Text fontSize="12">Found 6 items</Text>
        <HStack flexWrap="wrap" space={4}>
          {items.map((x, index) => {
            return (
              <Pressable
                width="45%"
                mb={4}
                borderRadius={10}
                shadow={2}
                backgroundColor="white"
                p={3}
                alignItems="center"
                onPress={() =>
                  navigation.navigate("ProductDetailScreen", {
                    name: x.name,
                    image: x.image,
                    price: x.price,
                    miles: x.miles,
                  })
                }
              >
                <VStack
                  space={1.5}
                  // width="45%"
                  // mb={4}
                  // alignItems="center"
                >
                  <Image
                    w="150"
                    h="150"
                    resizeMode="contain"
                    source={x.image}
                  ></Image>
                  <Text
                    w="100%"
                    textAlign="left"
                    pl={0}
                    fontSize={14}
                    color="#00595e"
                    fontFamily="DMSans_700Bold"
                  >
                    {x.name}
                  </Text>
                  <HStack
                    alignItems="center"
                    justifyContent="flex-start"
                    space={1}
                  >
                    <Text fontSize="12" fontFamily="DMSans_400Regular">
                      From {x.price} /
                    </Text>
                    <Image
                      source={require("../assets/images/asia_miles.png")}
                      w="15"
                      h="15"
                    />
                    <Text fontSize="12" fontFamily="DMSans_400Regular">
                      {x.miles}
                    </Text>
                  </HStack>
                </VStack>
              </Pressable>
            );
          })}
        </HStack>
      </VStack>
    </ScrollView>
  );
}
