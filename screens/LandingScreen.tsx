import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, Divider, HStack, Icon, Image } from "native-base";
import * as React from "react";
import { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { marginBottom } from "styled-system";

import { Text, View } from "../components/Themed";
import { loginWithGoogle } from "../services/auth";

export default function LandingScreen({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const _renderItem = ({ item, index }) => {
    return (
      <View style={{ height: 325, backgroundColor: "transparent" }}>
        <Text style={styles.carouselTitle}>{item.title}</Text>
        {item.image}
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
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "rgba(0, 0, 0, 0.69)",
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
      title: "Elevate your life with Cathay",
      image: (
        <Image
          resizeMode="contain"
          style={styles.carouselImage}
          alt="1"
          source={require("../assets/images/LandingGraph1.png")}
        />
      ),
    },
    {
      title: "Search for partners and\nredeem rewards easily",
      image: (
        <Image
          resizeMode="contain"
          style={styles.carouselImage}
          alt="2"
          source={require("../assets/images/LandingGraph2.png")}
        />
      ),
    },
    {
      title: "Dine and shop with miles effortlessly",
      image: (
        <Image
          resizeMode="contain"
          style={styles.carouselImage}
          alt="3"
          source={require("../assets/images/LandingGraph3.png")}
        />
      ),
    },
  ];
  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* <View style={styles.container}> */}
        <Text style={styles.title}>Welcome</Text>
        <Carousel
          renderItem={_renderItem}
          data={carouselItems}
          sliderWidth={275}
          itemWidth={275}
          layout={"default"}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
        {/* </View> */}
        {pagination()}
        <Text
          style={{ ...styles.link, marginTop: "5%" }}
          onPress={() => navigation.navigate("Login")}
        >
          Have an account? Sign in Here
        </Text>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("Signup")}
        >
          Continue with Email
        </Button>
        <HStack width="75%" marginTop={7}>
          <Divider size={2} width="45%" marginTop={3} />
          <Text style={styles.link}>OR</Text>
          <Divider size={2} width="45%" marginTop={3} />
        </HStack>
        <Button
          // style={styles.button}
          borderColor="#b9b9b9"
          variant="outline"
          width="75%"
          marginTop={6}
          onPress={() => loginWithGoogle()}
        >
          Login as Guest
        </Button>
      </SafeAreaView>
      <ImageBackground
        source={require("../assets/images/background_shape.png")}
        resizeMode="cover"
        style={styles.image}
      />
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    // resizeMode: "contain",
    // flex: 1,
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    // aspectRatio: 1,
    position: "absolute",
    zIndex: -1,
  },
  container: {
    // flex: 1,
    // justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
    marginTop: "15%",
  },
  carouselTitle: {
    fontSize: 14,
    color: "#FFF",
    marginTop: "5%",
    textAlign: "center",
  },
  carouselImage: {
    width: "100%",
    height: "100%",
  },
  link: {
    fontSize: 14,
    color: "#b1b1b1",
    // marginTop: "5%",
    textAlign: "center",
    margin: 5,
  },
  button: {
    backgroundColor: "#00595E",
    width: "75%",
    borderRadius: 7.5,
    marginTop: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
});
