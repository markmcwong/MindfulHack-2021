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
import { updateNewUserInfo } from "../services/firestore";
export default function RegisterInfo({ navigation, route }) {
  const user = useSelector((state: any) => state.user);
  const [details, setDetails] = useState({});
  return (
    <>
      <IconButton
        position="absolute"
        backgroundColor="#00595E"
        borderRadius={50}
        width={50}
        height={50}
        right="10"
        bottom="30"
        zIndex={20}
        onPress={() => {
          updateNewUserInfo(
            details.firstName,
            details.lastName,
            details.nationality,
            details.phoneNumber,
            details.country,
            details.city,
            details.addressLine1,
            details.addressLine2,
            details.postalCode,
            user.uid
          );
          navigation.navigate("NextTime");
        }}
        icon={<Icon color="white" as={<AntDesign name="right" />} size="sm" />}
      ></IconButton>
      <VStack style={styles.container}>
        <Text style={styles.heading}>{"Tell us more\nabout you!"}</Text>
        <VStack space={4}>
          <HStack
            width="100%"
            flexDirection="row"
            justifyContent="space-between"
            pt="4"
          >
            <Input
              padding={4}
              placeholder="First Name"
              backgroundColor="#F1F1F1"
              style={styles.input}
              placeholderTextColor="#00595E"
              width="45%"
              onChange={(event) =>
                setDetails({ ...details, firstName: event.nativeEvent.text })
              }
            />
            <Input
              padding={4}
              placeholder="Last Name"
              backgroundColor="#F1F1F1"
              style={styles.input}
              placeholderTextColor="#00595E"
              width="45%"
              onChange={(event) =>
                setDetails({ ...details, lastName: event.nativeEvent.text })
              }
            />
          </HStack>
          {/* <Input
            padding={4}
            placeholder="Last Name"
            backgroundColor="#F1F1F1"
            style={styles.input}
            placeholderTextColor="#00595E"
            width="100%"
          /> */}
        </VStack>
        <Divider size={2} width="100%" marginTop={7} marginBottom={5} />
        <Text pb={3} style={styles.subtitle}>
          {"Phone Number and Nationality"}
        </Text>
        <VStack space={4}>
          <Input
            padding={4}
            placeholder="Nationality"
            backgroundColor="#F1F1F1"
            style={styles.input}
            placeholderTextColor="#00595E"
            mr={2}
            onChange={(event) =>
              setDetails({ ...details, nationality: event.nativeEvent.text })
            }
          />
          <HStack
            width="100%"
            flexDirection="row"
            justifyContent="space-between"
            pt="4"
          >
            <Input
              padding={4}
              placeholder="+852"
              backgroundColor="#F1F1F1"
              style={styles.input}
              placeholderTextColor="#00595E"
              width="30%"
            />
            <Input
              padding={4}
              placeholder="Phone Number"
              backgroundColor="#F1F1F1"
              style={styles.input}
              placeholderTextColor="#00595E"
              width="65%"
              onChange={(event) =>
                setDetails({ ...details, phoneNumber: event.nativeEvent.text })
              }
            />
          </HStack>
        </VStack>
        <Divider size={2} width="100%" marginTop={7} marginBottom={5} />
        <Text style={styles.subtitle}>{"Address"}</Text>
        <VStack space={4}>
          <HStack
            width="100%"
            flexDirection="row"
            justifyContent="space-between"
            pt="4"
          >
            <Input
              padding={4}
              placeholder="Country"
              backgroundColor="#F1F1F1"
              style={styles.input}
              placeholderTextColor="#00595E"
              width="30%"
              onChange={(event) =>
                setDetails({ ...details, country: event.nativeEvent.text })
              }
            />
            <Input
              onChange={(event) =>
                setDetails({ ...details, city: event.nativeEvent.text })
              }
              padding={4}
              placeholder="City/State"
              backgroundColor="#F1F1F1"
              style={styles.input}
              placeholderTextColor="#00595E"
              width="65%"
            />
          </HStack>
          <Input
            padding={4}
            placeholder="Address Line 1"
            backgroundColor="#F1F1F1"
            style={styles.input}
            placeholderTextColor="#00595E"
            mr={2}
            onChange={(event) =>
              setDetails({ ...details, addressLine1: event.nativeEvent.text })
            }
          />
          <Input
            padding={4}
            placeholder="Address Line 2"
            backgroundColor="#F1F1F1"
            style={styles.input}
            placeholderTextColor="#00595E"
            mr={2}
            onChange={(event) =>
              setDetails({ ...details, addressLine2: event.nativeEvent.text })
            }
          />
          {/* <Input
            padding={4}
            placeholder="Address Line 3"
            backgroundColor="#F1F1F1"
            style={styles.input}
            placeholderTextColor="#00595E"
            mr={2}
          /> */}
          <Input
            padding={4}
            placeholder="Postal Code (if any)"
            backgroundColor="#F1F1F1"
            style={styles.input}
            placeholderTextColor="#00595E"
            width="65%"
            onChange={(event) =>
              setDetails({ ...details, postalCode: event.nativeEvent.text })
            }
          />
        </VStack>
      </VStack>
    </>
  );
}

const styles = StyleSheet.create({
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
    alignItems: "center",
    justifyContent: "center",
    padding: "10%",
  },
});
