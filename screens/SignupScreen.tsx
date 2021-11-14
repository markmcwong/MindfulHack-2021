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
import {
  ImageBackground,
  StyleSheet,
  Image,
  CheckBox,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { textAlign } from "styled-system";

import { Text, View } from "../components/Themed";
import { loginWithGoogle, register } from "../services/auth";

export default function LandingScreen({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
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
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={styles.container}
      >
        <SafeAreaView style={styles.container}>
          {/* <View style={styles.container}> */}

          <VStack style={{ flex: 1 }} width="75%">
            <Text style={styles.title}>Welcome</Text>
            {/* </View> */}
            <Text style={styles.subtitle}>Sign up now to start using</Text>
            <Image
              resizeMode="cover"
              style={styles.logoImage}
              source={require("../assets/images/register_page_4_diagram.png")}
              margin={15}
              alt="signup"
            />
            <VStack space={4}>
              <Input
                padding={4}
                placeholder="Email"
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
              <Input
                padding={4}
                placeholder="Username"
                backgroundColor="#F1F1F1"
                value={username}
                onChangeText={(e: string) => setUsername(e)}
              />

              <Text style={{ ...styles.link, textAlign: "left" }}>
                Password should consist of at least 8 characters, including
                letters and numbers
              </Text>
              <Checkbox value="test" alignSelf="flex-start">
                <Text style={{ ...styles.link, textAlign: "left" }}>
                  Remember me
                </Text>
              </Checkbox>
              <Button
                marginBottom="10%"
                style={styles.button}
                // w="100%"
                onPress={() => register(username, email, password)}
              >
                Sign Up
              </Button>
            </VStack>
          </VStack>

          <VStack paddingBottom={2}>
            <Text
              style={{ ...styles.link, marginTop: "5%" }}
              onPress={() => navigation.navigate("FirstTime")}
            >
              Have an account? Sign in Here
            </Text>
            <HStack width="75%" marginTop={2}>
              <Divider size={2} width="45%" marginTop={3} />
              <Text style={styles.link}>OR</Text>
              <Divider size={2} width="45%" marginTop={3} />
            </HStack>
            <Button
              // style={styles.button}
              borderColor="#b9b9b9"
              variant="outline"
              // width="75%"
              marginTop={2}
              onPress={() => loginWithGoogle()}
            >
              Login as Guest
            </Button>
          </VStack>
        </SafeAreaView>
      </TouchableWithoutFeedback>
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
    marginTop: "12%",
  },
  subtitle: {
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
    marginTop: "3%",
    marginBottom: "5%",
  },
  carouselTitle: {
    fontSize: 14,
    color: "#FFF",
    marginTop: "5%",
    textAlign: "center",
  },
  logoImage: {
    width: 150,
    height: 150,
    alignSelf: "center",
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
    // width: "100%",
    // textAlign: "left",
    borderRadius: 10,
    marginTop: 15,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
