import { AntDesign } from "@expo/vector-icons";
import {
  VStack,
  Text,
  Input,
  HStack,
  Divider,
  Fab,
  Icon,
  Button,
  IconButton,
} from "native-base";
import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { textColor } from "styled-system";
import { updateNewUserPreferences } from "../services/firestore";

const preferenceDefault = {
  Electronics: false,
  Pets: false,
  Tickets: false,
  Books: false,
  Apparels: false,
  Bags: false,
  Watches: false,
  Accessories: false,
  Travel: false,
};

export default function RegisterPreference({ navigation, route }) {
  const user = useSelector((state: any) => state.user);
  const [preference, setPreference] = useState(preferenceDefault);

  return (
    <>
      <IconButton
        position="absolute"
        backgroundColor="#00595E"
        borderRadius={50}
        width={50}
        height={50}
        right="10"
        zIndex={2}
        onPress={() => {
          console.log(preference);
          updateNewUserPreferences(
            Object.keys(preference).filter((x) => preference[x] === true),
            user.uid
          );
        }}
        bottom="30"
        icon={<Icon color="white" as={<AntDesign name="right" />} size="sm" />}
      ></IconButton>
      <VStack style={styles.container}>
        <Text mb={2} style={styles.heading}>
          {"Your product preferences?"}
        </Text>
        <HStack flexWrap="wrap" ml="-5%" mr="-10%">
          {Object.keys(preference).map((key) => (
            <Button
              key={key}
              size="sm"
              onPress={() =>
                setPreference({ ...preference, [key]: !preference[key] })
              }
              style={styles.button}
              backgroundColor={preference[key] ? "#00595E" : "white"}
              borderColor={preference[key] ? "white" : "#00595E"}
              borderWidth={1}
              padding={5}
              mr={2}
              mb={2}
              mt={2}
            >
              <Text color={preference[key] ? "white" : "#00595E"}>
                {" "}
                {key}
                {/* {preference[key] ? "✓" : ""} */}
              </Text>
            </Button>
          ))}
        </HStack>
      </VStack>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 29,
    color: "blue",
  },
  input: {
    borderColor: "#00595E",
    borderWidth: 1,
    color: "#00595E",
  },
  heading: {
    fontSize: 32,
    color: "#00595E",
    fontWeight: "800",
    fontFamily: "Avenir",
    textAlign: "left",
    width: "100%",
    marginLeft: "-5%",
  },
  subtitle: {
    fontSize: 20,
    color: "#00595E",
    fontWeight: "800",
    fontFamily: "Avenir",
    textAlign: "left",
    width: "100%",
    marginLeft: "-5%",
  },
  container: {
    flex: 1,
    // justifyContent: "space-between",
    top: "5%",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "10%",
  },
});
