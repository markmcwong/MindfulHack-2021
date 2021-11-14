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
  Box,
  List,
} from "native-base";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "../components/Themed";
import Carousel, { Pagination } from "react-native-snap-carousel";

import {
  Animated,
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  ViewBase,
  FlatList,
} from "react-native";

import { Ionicons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

import { logout } from "../services/auth";
import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import firebase from "firebase";
import "firebase/firestore";
import { getUserDetails } from "../services/firestore";
import { backgroundColor, shadow } from "styled-system";

const mapStateToProps = (state: any, props: any) => {
  return { user: state.user };
};

const Membership = (props: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const _renderItem = ({ item, index }) => {
    return (
      <View style={{ backgroundColor: "transparent" }}>
        <VStack
          backgroundColor="white"
          shadow={3}
          borderRadius={15}
          p={6}
          space={1}
          m={2}
        >
          <Text style={styles.carouselTitle} color={item.titleColor}>
            {item.title}
          </Text>
          <Text style={styles.carouselDescription}>
            {item.miles !== 0 && (
              <>
                <Text style={styles.carouselDescription}>Gain </Text>
                <Text style={styles.carouselMiles}>{item.miles} </Text>
              </>
            )}
            {item.description}
          </Text>
          <List.Unordered my={2} border={0}>
            {item.welfare.map((welfare: any) => {
              return (
                <List.Item
                  _text={{
                    color: "#00595E",
                    fontFamily: "DMSans_400Regular",
                  }}
                >
                  {welfare}
                </List.Item>
              );
            })}
          </List.Unordered>
        </VStack>
      </View>
    );
  };
  const pagination = () => {
    return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        // containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        dotStyle={{
          width: 25,
          height: 7,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "#00595E",
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };
  const carouselItems = [
    {
      title: "Bronze",
      description: "Register as a member",
      titleColor: "#AB7620",
      welfare: [],
      miles: 0,
    },
    {
      title: "Silver",
      description: "miles in a year or pay a yearly fee of HKD 1500 to get:",
      titleColor: "#96928B",
      miles: 20000,
      welfare: ["Seasonal Saving Events", "Miles Multipliers x 2"],
    },
    {
      title: "Gold",
      description: "miles in a year or pay a yearly fee of HKD 8000 to get:",
      titleColor: "#EE9301",
      miles: 80000,
      welfare: [
        "Seasonal Saving Events",
        "Miles Multiplier x 3",
        "Free Standard Shipping",
        "Birthday Gifts",
        "Seasonally Discount Code",
        "Marco Polo Same Tier Privileges",
      ],
    },
    {
      title: "Diamond",
      description: "miles in a year or pay a yearly fee of HKD 25000 to get:",
      titleColor: "#379196",
      miles: 250000,
      welfare: [
        "Seasonal Saving Events",
        "Miles Multiplier x 4",
        "Free Standard Shipping",
        "Birthday Gifts",
        "Seasonally Discount Code",
        "Marco Polo Same Tier Privileges",
        "First Access to Products",
        "Monthly Discount Code",
        "Same-Day Delivery Promise",
      ],
    },
  ];

  const user = useSelector((state: any) => state.user);
  useEffect(() => {}, []);

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <VStack
        alignItems="center"
        width={Dimensions.get("window").width}
        padding={10}
        // height="100%"
      >
        <View
          style={{
            width: "100%",
            borderRadius: 15,
            padding: 0,
            backgroundColor: "transparent",
          }}
        >
          <VStack marginTop={8} marginBottom={20}>
            <HStack alignItems="center" pl={0} ml={0}>
              <Icon
                color="#00595E"
                as={MaterialCommunityIcons}
                name="arrow-left"
                size={10}
                mr={2}
                onPress={() => props.navigation.goBack()}
              />
              <Text
                style={{
                  color: "#00595E",
                  fontSize: 36,
                  fontFamily: "DMSans_700Bold",
                }}
              >
                Membership
              </Text>
            </HStack>
            <Text
              style={{
                marginTop: 12,
                marginBottom: 12,
                color: "#3F3D56",
                fontSize: 14,
                fontFamily: "DMSans_400Regular",
                lineHeight: 24,
              }}
            >
              We offer a loyalty programme that is designed to reward our most
              valuable customers with benefits and services that enhance their
              travel experience. There are four tiers in the club – Bronze,
              Silver, Gold, and Diamond – and each offers our members a range of
              privileges and benefits that make every journey something to look
              forward to.
            </Text>
            <Divider></Divider>
            <Text
              style={{
                marginTop: 16,
                color: "#00595E",
                fontSize: 22,
                fontFamily: "DMSans_700Bold",
              }}
            >
              Why Join?
            </Text>
            <Text
              style={{
                marginTop: 12,
                marginBottom: 12,
                color: "#3F3D56",
                fontSize: 14,
                fontFamily: "DMSans_400Regular",
                lineHeight: 24,
              }}
            >
              The loyalty program makes travelling better by offering you
              greater personal recognition, exclusive privileges, and special
              benefits with our partners.
            </Text>
            {pagination()}

            <Carousel
              removeClippedSubviews={false}
              renderItem={_renderItem}
              data={carouselItems}
              sliderWidth={350}
              itemWidth={350}
              // layout={"default"}
              onSnapToItem={(index) => setActiveIndex(index)}
            />
          </VStack>
        </View>
      </VStack>
    </ScrollView>
  );
};

export default connect(mapStateToProps)(Membership);
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
  carouselTitle: {
    fontSize: 18,
    // marginTop: "5%",
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: "2%",
  },
  carouselDescription: {
    color: "#00595E",
    fontFamily: "DMSans_400Regular",
    lineHeight: 24,
  },
  carouselMiles: {
    color: "#B58725",
    fontFamily: "DMSans_700Bold",
    lineHeight: 24,
  },
  carouselWelfare: {
    color: "#00595E",
    fontFamily: "DMSans_400Regular",
  },
});
