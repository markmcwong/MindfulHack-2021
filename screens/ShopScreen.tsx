import React from "react";
import {
  HStack,
  ScrollView,
  Text,
  Image,
  View,
  IconButton,
  Icon,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
export default function ShopScreen({ navigation, route }) {
  return (
    <SafeAreaView>
      <ScrollView pl={5}>
        <HStack alignItems="center">
          <HStack>
            <Image
              width="15"
              height="15"
              source={require("../assets/images/asia_miles.png")}
            />
            <Text>40,000</Text>
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
        <Text>Shop</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
