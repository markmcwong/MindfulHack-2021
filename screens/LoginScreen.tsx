import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Button,
  Center,
  Divider,
  HStack,
  Icon,
  VStack,
  Input,
  Checkbox,
} from "native-base";
import * as React from "react";
import { useState } from "react";
import { ImageBackground, StyleSheet, Image, CheckBox } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { textAlign } from "styled-system";

import { Text, View } from "../components/Themed";
import { login, loginWithGoogle } from "../services/auth";

export default function LoginScreen({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const _renderItem = ({ item, index }) => {
    return (
      <View style={{ height: 300, backgroundColor: "transparent" }}>
        <Text style={styles.carouselTitle}>{item.title}</Text>
        {item.image}
      </View>
    );
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* <View style={styles.container}> */}
        <VStack style={{ flex: 1 }} width="75%">
          <Text style={styles.title}>Login</Text>
          {/* </View> */}
          <Text style={styles.subtitle}>To continue your access</Text>
          <Image
            resizeMode="contain"
            style={styles.logoImage}
            source={require("../assets/images/mindfulhack_login_5.png")}
            margin={8}
            alt="login"
          />
          <VStack space={3}>
            <Input
              padding={4}
              placeholder="Please enter your email"
              backgroundColor="#F1F1F1"
              value={email}
              onChangeText={(e: string) => setEmail(e)}
            />
            <Input
              padding={4}
              type="password"
              placeholder="Password"
              backgroundColor="#F1F1F1"
              value={password}
              onChangeText={(e: string) => setPassword(e)}
            />
            <HStack justifyContent="space-between">
              <Checkbox value="test" alignSelf="flex-start">
                <Text style={{ ...styles.link, textAlign: "left" }}>
                  Remember me
                </Text>
              </Checkbox>
              <Text style={styles.link}>Forgot Password?</Text>
            </HStack>
            <Button
              style={styles.button}
              // w="100%"
              onPress={() => {
                console.log(email);
                login(email, password);
              }}
            >
              Login
            </Button>
          </VStack>
        </VStack>
        <VStack paddingBottom={5}>
          <Text
            style={{ ...styles.link, marginTop: "5%" }}
            onPress={() => navigation.navigate("Signup")}
          >
            Don’t have an account? Create here
          </Text>
          <HStack width="75%" style={{ marginTop: "2.5%" }}>
            <Divider size={2} width="45%" marginTop={3} />
            <Text style={{ ...styles.link, color: "#b9b9b9" }}>OR</Text>
            <Divider size={2} width="45%" marginTop={3} />
          </HStack>
          <Button
            // style={styles.button}
            onPress={() => loginWithGoogle()}
            borderColor="#b9b9b9"
            variant="outline"
            // width="75%"
            style={{ marginTop: "2.5%" }}
          >
            Login as Guest
          </Button>
        </VStack>
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
    height: 350,
    justifyContent: "center",
    alignItems: "center",
    // aspectRatio: 1,
    position: "absolute",
    zIndex: -1,
  },
  container: {
    flex: 1,
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
  subtitle: {
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
    marginTop: "5%",
    marginBottom: "5%",
  },
  carouselTitle: {
    fontSize: 14,
    color: "#FFF",
    marginTop: "5%",
    textAlign: "center",
  },
  logoImage: {
    width: 300,
    height: 150,
    alignSelf: "center",
  },
  link: {
    fontSize: 14,
    color: "#868686",
    // marginTop: "5%",
    textAlign: "center",
    margin: 5,
  },
  button: {
    backgroundColor: "#00595E",
    // width: "100%",
    // textAlign: "left",
    borderRadius: 10,
    marginTop: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
});
