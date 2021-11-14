import {
  Divider,
  HStack,
  Icon,
  IconButton,
  Image,
  ScrollView,
  Text,
  VStack,
  View,
} from "native-base";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import React from "react";
import { StyleSheet } from "react-native";

export default function OfferDetailsScreen({ navigation, route }) {
  return (
      <ScrollView style={styles.container}>
          <IconButton
              zIndex={20}
              position="absolute"
              backgroundColor="white"
              top={16}
              borderRadius={50}
              left={7}
            icon={
              <Icon
                as={MaterialCommunityIcons}
                name="arrow-left"
                color="#00595E"
                size={5}
              />
            }
            onPress={() => {
              navigation.goBack();
            }}
          ></IconButton>
      <View alignItems="center" w="100%" px={0}>
        <Image
          w="100%"
          mx={0}
          source={require("../assets/images/Offer_Details.png")}
          resizeMode="cover"
        ></Image>
        <View
          h="125"
          w="125"
          mt="-65"
          borderRadius={100}
          bg="white"
          alignItems="center"
          justifyContent="center"
          p={2}
          mb={3}
          shadow="4"
        >
          <Image
            w="100"
            mx={0}
            source={require("../assets/images/Continental_Logo.png")}
            resizeMode="contain"
          ></Image>
        </View>
        <VStack space={4} w="100%" px={8}>
          <Text
            fontSize={24}
            color="#00595E"
            fontWeight="bold"
            fontFamily="DMSans_700Bold"
          >
            {route.params.name}
          </Text>
          <HStack alignItems="center" space={2}>
            <Icon
              color="#8b8989"
              as={<Ionicons name="navigate-circle-outline" />}
            />
            <Text color="#8b8989" justifyContent="center">
              K11, Kowloon, Hong Kong SAR
            </Text>
          </HStack>
          <Text fontFamily="DMSans_400Regular" fontSize="14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, cras
            maecenas neque interdum velit. Vel gravida purus eros, dui. Vitae
            pulvinar faucibus placerat euismod quisque ac facilisis libero.
            Purus et mi quis aenean purus venenatis velit ac netus.
          </Text>
          <Text fontFamily="DMSans_700Bold" fontSize={20} color="#B58725">
            Dine here to enjoy
          </Text>
          <HStack alignItems="center">
            <Text
              color="#3F3D56"
              fontFamily="DMSans_700Bold"
              fontWeight="bold"
              fontSize={24}
              pr={1}
            >
              HKD 4 =
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
              color="#3F3D56"
              fontFamily="DMSans_700Bold"
              fontWeight="bold"
              fontSize={24}
            >
              1
            </Text>
          </HStack>
          <Divider my={2} backgroundColor="#DADADA" />
          <Text fontFamily="DMSans_700Bold" fontSize={20} color="#B58725">
            How you can earn{" "}
          </Text>
          <VStack space={4}>
            <HStack alignItems="center" space={4}>
              <View
                backgroundColor="#B58725"
                borderRadius={200}
                w={30}
                h={30}
                justifyContent="center"
                alignItems="center"
              >
                <Text fontFamily="DMSans_700Bold" fontSize={18} color="white">
                  1
                </Text>
              </View>

              <Text fontFamily="DMSans_700Bold" fontSize="14" color="#674C11">
                Dine at our partner restaurants
              </Text>
            </HStack>
            <HStack alignItems="center" space={4}>
              <View
                backgroundColor="#B58725"
                borderRadius={200}
                w={30}
                h={30}
                justifyContent="center"
                alignItems="center"
              >
                <Text fontFamily="DMSans_700Bold" fontSize={18} color="white">
                  2
                </Text>
              </View>
              <Text fontFamily="DMSans_700Bold" fontSize="14" color="#674C11">
                Say “Miles, please!” when you pay the bill
              </Text>
            </HStack>
            <HStack alignItems="center" space={4} mb={10}>
              <View
                backgroundColor="#B58725"
                borderRadius={200}
                w={30}
                h={30}
                justifyContent="center"
                alignItems="center"
              >
                <Text fontFamily="DMSans_700Bold" fontSize={18} color="white">
                  3
                </Text>
              </View>
              <VStack space={1}>
                <Text fontFamily="DMSans_700Bold" fontSize="14" color="#674C11">
                  Show your Asia Miles membership QR code
                              </Text>
                            <Text fontSize="12"  fontFamily="DMSans_700Bold" color="#0078BC">Show QR Code ></Text>  
              </VStack>
            </HStack>
          </VStack>
        </VStack>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
        flex: 1,
      paddingBottom: 20,
      marginBottom: 65

  },
});
