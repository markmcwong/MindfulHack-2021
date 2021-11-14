import {
  View,
  Text,
  Tabs,
  VStack,
  ScrollView,
  HStack,
  Divider,
  Pressable,
  Image,
  Modal,
  Button,
} from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { backgroundColor } from "styled-system";
import { Dimensions, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const examples = [
  "The Continental",
  "DEF Shop",
  "GHI Shop",
  "JKL Shop",
  "MNO Shop",
];

const entertainmentExamples = [
  "Hins Live in HK The Next 20",
  "Professional Yoga lesson",
  "Hins Live in HK The Next 20",
  "Professional Yoga lesson",
];

const entertainmentImages = [
  require("../assets/images/hins.png"),
  require("../assets/images/yoga.png"),
  require("../assets/images/hins.png"),
  require("../assets/images/yoga.png"),
];

const diningExamples = [
  "Earn miles on OpenRice\nTakeaway service",
  "Pay with Miles Plus Cash\nin one swipe",
  "Earn miles on OpenRice\nTakeaway service",
  "Pay with Miles Plus Cash\nin one swipe",
];
const diningImages = [
  require("../assets/images/openrice.png"),
  require("../assets/images/milesplus.png"),
  require("../assets/images/openrice.png"),
  require("../assets/images/milesplus.png"),
];
const explorationExamples = [
  "Apply for Standard Chartered\nCathay Mastercard",
  "Earn extra miles while you\nshop this 11.11",
  "Apply for Standard Chartered\nCathay Mastercard",
  "Earn extra miles while you\nshop this 11.11",
];

const explorationImages = [
  require("../assets/images/standard_chartered.png"),
  require("../assets/images/extra_miles.png"),
  require("../assets/images/standard_chartered.png"),
  require("../assets/images/extra_miles.png"),
];

export default function OfferScreen({ navigation, route }) {
  const [index, setIndex] = React.useState(0);
  const [open, setOpen] = useState(true);

  const demo = () => {
    return (
      <Modal isOpen={open} onClose={() => setOpen(false)} mt={12}>
        <Modal.Content maxWidth="400px" style={styles.top}>
          <Modal.CloseButton />
          <Modal.Body>
            <HStack space={4} pr={5}>
              <Image source={require("../assets/images/Cathay_Pacific.png")} />
              <VStack space={1}>
                <Text fontFamily="DMSans_700Bold" fontSize="15">
                  Earn Extra Miles now!
                </Text>
                <Text fontFamily="DMSans_400Regular" fontSize="12">
                  {"Spend 1 HKD and earn 4 Asia Miles\nat The Continental!"}
                </Text>
              </VStack>
            </HStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    );
  };

  return (
    <SafeAreaView backgroundColor="#00595E" flex={1}>
      {demo()}
      <Tabs
        variant="soft-rounded"
        onChange={(index) => setIndex(index)}
        align="center"
        defaultIndex={0}
      >
        <Tabs.Bar>
          <Tabs.Tab
            borderTopLeftRadius="15"
            borderTopRightRadius="15"
            backgroundColor={index === 0 ? "white" : "#00595E"}
          >
            <Text
              fontSize="14"
              fontFamily="DMSans_700Bold"
              color={index === 1 ? "white" : "#00595E"}
            >
              Nearby Offers
            </Text>
          </Tabs.Tab>
          <Tabs.Tab
            borderTopLeftRadius="15"
            borderTopRightRadius="15"
            backgroundColor={index === 1 ? "white" : "#00595E"}
          >
            <Text
              fontSize="14"
              fontFamily="DMSans_700Bold"
              color={index !== 1 ? "white" : "#00595E"}
            >
              Newest Offers
            </Text>
          </Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View p={0} alignItems="center">
            <MapView style={styles.map} />
            <VStack
              position="absolute"
              width="102%"
              bottom="145"
              borderTopLeftRadius="35"
              borderTopRightRadius="35"
              backgroundColor="white"
              borderColor="#00595E"
              borderWidth="4"
              px={10}
              py={7}
              height="275"
            >
              <Text
                color="#00595E"
                fontFamily="DMSans_700Bold"
                fontWeight="600"
                fontSize="24"
              >
                Offers in K11
              </Text>
              <ScrollView flex={1} mt={5}>
                {examples.map((item, index) => (
                  <>
                    <Pressable
                      onPress={() =>
                        navigation.navigate("OfferDetails", {
                          name: item,
                        })
                      }
                    >
                      <HStack
                        width="100%"
                        justifyContent="space-between"
                        alignItems="center"
                        pb={3}
                      >
                        <VStack>
                          <Text mb={2} fontWeight="bold" fontSize="18">
                            {item}
                          </Text>
                          <Text fontSize="12" color="#B58725">
                            Dine here to earn
                          </Text>
                        </VStack>
                        <Text color="#00595E" fontSize="12">
                          View Details
                        </Text>
                      </HStack>
                      <Divider mb={4} />
                    </Pressable>
                  </>
                ))}
              </ScrollView>
            </VStack>
          </Tabs.View>
          <Tabs.View backgroundColor="white" h="100%">
            <VStack space={6} m={4} mr={0}>
              <VStack space={3}>
                <Text color="#00595E" fontSize="16" fontFamily="DMSans_700Bold">
                  Entertainment offers
                </Text>
                <ScrollView horizontal={true}>
                  <HStack space={4}>
                    {entertainmentExamples.map((item, index) => (
                      <VStack
                        borderRadius={20}
                        borderWidth="1"
                        borderColor="#DFDFDF"
                        p={3}
                        pb={5}
                        space={2}
                      >
                        <Image source={entertainmentImages[index]} />
                        <Text
                          fontSize={12}
                          fontFamily="DMSans_700Bold"
                          color="#00595E"
                        >
                          {item}
                        </Text>
                        <HStack>
                          <Image
                            width="15"
                            height="15"
                            source={require("../assets/images/asia_miles.png")}
                          />
                          <Text fontSize={12} fontFamily="DMSans_400Regular">
                            20000
                          </Text>
                        </HStack>
                      </VStack>
                    ))}
                  </HStack>
                </ScrollView>
              </VStack>

              <VStack space={3}>
                <Text color="#00595E" fontSize="16" fontFamily="DMSans_700Bold">
                  Dining offers
                </Text>
                <ScrollView horizontal={true}>
                  <HStack space={4}>
                    {diningExamples.map((item, index) => (
                      <VStack
                        borderRadius={20}
                        borderWidth="1"
                        borderColor="#DFDFDF"
                        p={3}
                        pb={5}
                        space={2}
                      >
                        <Image source={diningImages[index]} />
                        <Text
                          fontSize={12}
                          fontFamily="DMSans_700Bold"
                          color="#00595E"
                        >
                          {item}
                        </Text>
                      </VStack>
                    ))}
                  </HStack>
                </ScrollView>
              </VStack>
              <VStack space={3}>
                <Text color="#00595E" fontSize="16" fontFamily="DMSans_700Bold">
                  Exploration offers
                </Text>
                <ScrollView horizontal={true}>
                  <HStack space={4}>
                    {explorationExamples.map((item, index) => (
                      <VStack
                        borderRadius={20}
                        borderWidth="1"
                        borderColor="#DFDFDF"
                        p={3}
                        pb={5}
                        space={2}
                      >
                        <Image source={explorationImages[index]} />
                        <Text
                          fontSize={12}
                          fontFamily="DMSans_700Bold"
                          color="#00595E"
                        >
                          {item}
                        </Text>
                      </VStack>
                    ))}
                  </HStack>
                </ScrollView>
              </VStack>
            </VStack>
          </Tabs.View>
        </Tabs.Views>
      </Tabs>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  top: {
    marginBottom: "auto",
    marginTop: 0,
    borderRadius: 25,
  },
});
