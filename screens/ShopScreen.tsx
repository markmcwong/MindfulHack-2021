import {
  Button,
  HStack,
  Icon,
  IconButton,
  Image,
  ScrollView,
  Text,
  VStack,
  View,
  Pressable,
} from "native-base";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = ["Featured Products", "Electronics", "Home"];
const categoriesColor = ["#EEF6FF", "#FFF7F4", "#FFE4EA"];
const categoriesIcon = [
  require("../assets/images/feature_products.png"),
  require("../assets/images/Electronics_icon.png"),
  require("../assets/images/Home_icon.png"),
];

const products = [
  {
    brand: "Apple",
    name: "iPhone 13 Pro Max",
    price: "$9,399",
    miles: "234,975",
    image: require("../assets/images/iphone_shop.png"),
  },
  {
    brand: "Samsung",
    name: "Refrigerator",
    price: "$15,900",
    miles: "234,975",
    image: require("../assets/images/refrigerator.png"),
  },
];

export default function ShopScreen({ navigation, route }) {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }} flex={1}>
      <ScrollView bg="white" pl={5}>
        <VStack space={5}>
          <HStack alignItems="center" justifyContent="space-between" pr={5}>
            <HStack alignItems="center">
              <Image
                width="15"
                height="15"
                source={require("../assets/images/asia_miles.png")}
              />
              <Text fontSize="20" pl={1} fontFamily="DMSans_700Bold">
                40,000
              </Text>
            </HStack>

            <HStack>
              <IconButton
                icon={<Icon as={Ionicons} name="search" size={6} />}
              ></IconButton>
              <IconButton
                icon={<Icon as={Ionicons} name="ios-basket-outline" size={6} />}
              ></IconButton>
            </HStack>
          </HStack>
          <VStack space={3}>
            <Text fontSize="40" fontFamily="DMSans_700Bold" color="#00595E">
              Shop
            </Text>
            <Text fontSize="15" fontFamily="DMSans_400Regular" color="#00595E">
              Cathay addresses all your needs
            </Text>
            <ScrollView horizontal={true}>
              {categories.map((x, index) => (
                <Button
                  backgroundColor={categoriesColor[index]}
                  mr={3}
                  startIcon={
                    <Image
                      w="19"
                      h="19"
                      resizeMode="contain"
                      source={categoriesIcon[index]}
                    />
                  }
                >
                  <Text fontFamily="DMSans_700Bold" fontSize={15}>
                    {x}
                  </Text>
                </Button>
              ))}
            </ScrollView>
          </VStack>

          <HStack justifyContent="space-between" alignItems="center" pr={5}>
            <Text fontSize="25" fontFamily="DMSans_700Bold" color="#B58725">
              Popular Products
            </Text>
            <Text fontSize="13" fontFamily="DMSans_700Bold">
              See All
            </Text>
          </HStack>
          <ScrollView horizontal={true}>
            {products.map((x, index) => (
              <Pressable
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
                  backgroundColor="white"
                  shadow={3}
                  borderRadius={15}
                  p={3}
                  space={1}
                  m={2}
                >
                  <Image source={x.image} w="180" resizeMode="contain" />
                  <Text fontSize={12} fontFamily="DMSans_400Regular">
                    {x.brand}
                  </Text>
                  <Text fontSize={14} fontFamily="DMSans_700Bold">
                    {x.name}
                  </Text>
                  <HStack alignItems="center" space={1}>
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
            ))}
          </ScrollView>
          <HStack justifyContent="space-between" alignItems="center" pr={5}>
            <Text fontSize="25" fontFamily="DMSans_700Bold" color="#B58725">
              For you
            </Text>
            <Text fontSize="13" fontFamily="DMSans_700Bold">
              See All
            </Text>
          </HStack>
          <HStack
            // justifyContent="space-between"
            alignItems="center"
            // shadow={3}
            w="95%"
            style={{ backgroundColor: "#fff" }}
            shadow={2}
            mr={10}
            pr={5}
            py={3}
            borderRadius={10}
          >
            <Image source={require("../assets/images/shop_camera.png")}></Image>
            <VStack space={1}>
              <Text fontSize="13" fontFamily="DMSans_700Bold" color="#00595E">
                Sony VLOG Camera
              </Text>

              <HStack alignItems="center" space={1}>
                <Text fontSize="12" fontFamily="DMSans_400Regular">
                  From HK$6,499 /
                </Text>
                <Image
                  source={require("../assets/images/asia_miles.png")}
                  w="15"
                  h="15"
                />
                <Text fontSize="12" fontFamily="DMSans_400Regular">
                  164,275
                </Text>
              </HStack>
            </VStack>
          </HStack>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
