import {
  Text,
  Fab,
  VStack,
  Icon,
  HStack,
  Pressable,
  Image,
  View,
  //   ScrollView,
  CircleIcon,
  Link,
} from "native-base";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import appTheme from "../constants/Colors";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Audio, Video } from "expo-av";

import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
// import { ScrollView } from "react-native-gesture-handler";
import { marginBottom } from "styled-system";
const SleepExercise2 = ({ navigation, route }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [music, setMusic] = useState<Audio.Sound>();
  const [isPlaying, setPlaying] = useState<boolean>(false);
  useEffect(() => {
    playSound();
  }, []);

  const playSound = async () => {
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
    // OR
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Sleep.mp3"),
      { shouldPlay: true }
    );
    setMusic(sound);
    setPlaying(true);
    await music!.playAsync();
    setPlaying(false);
  };
  const data = [
    {
      title: "Title",
      thoughts: "Content",
    },
    {
      title: "Title",
      thoughts: "Content",
    },
    {
      title: "Title",
      thoughts: "Content",
    },
  ];
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
          backgroundColor: "#fff",
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
  const _renderItem = ({ item, index }) => {
    return (
      <View style={{ height: 300, backgroundColor: "transparent" }}>
        <Text style={styles.carouselTitle}>{item.title}</Text>
        {item.image}
      </View>
    );
  };
  const carouselItems = [
    {
      title: "Step 1 Here",
      image: (
        <Image
          resizeMode="contain"
          style={styles.carouselImage}
          alt="1"
          source={require("../assets/images/mindfulhack_sleepExercise_1.png")}
        />
      ),
    },
    {
      title: "Step 2 Here",
      image: (
        <Image
          resizeMode="contain"
          style={styles.carouselImage}
          alt="2"
          source={require("../assets/images/mindfulhack_sleep.png")}
        />
      ),
    },
    {
      title: "Step 3 Here",
      image: (
        <Image
          resizeMode="contain"
          style={styles.carouselImage}
          alt="3"
          source={require("../assets/images/mindfulhack_login_1.png")}
        />
      ),
    },
    {
      title: "Step 4 Here",
      image: (
        <Image
          resizeMode="contain"
          style={styles.carouselImage}
          alt="1"
          source={require("../assets/images/mindfulhack_sleepExercise_1.png")}
        />
      ),
    },
    {
      title: "Step 5 Here",
      image: (
        <Image
          resizeMode="contain"
          style={styles.carouselImage}
          alt="2"
          source={require("../assets/images/mindfulhack_sleep.png")}
        />
      ),
    },
    {
      title: "Step 6 Here",
      image: (
        <Image
          resizeMode="contain"
          style={styles.carouselImage}
          alt="3"
          source={require("../assets/images/mindfulhack_login_1.png")}
        />
      ),
    },
  ];
  return (
    <SafeAreaView style={styles.container} backgroundColor={"#5A8A75"}>
      <VStack alignSelf="flex-start">
        <Text
          fontWeight="900"
          fontFamily="Avenir"
          fontSize={appTheme.default.titleSize}
          color="#fff"
          style={{ marginLeft: "14%" }}
        >
          Exercises Before Sleep
        </Text>
        <Text
          fontWeight="500"
          fontFamily="Avenir"
          fontSize={20}
          color="#fff"
          style={{ marginLeft: "14%" }}
        >
          6 Steps
        </Text>
      </VStack>
      <View alignItems={"center"} height={450} style={{ marginTop: "20%" }}>
        <VStack>
          <Carousel
            renderItem={_renderItem}
            data={carouselItems}
            sliderWidth={275}
            itemWidth={275}
            layout={"default"}
            removeClippedSubviews={false}
            onSnapToItem={(index) => setActiveIndex(index)}
          />
          {pagination()}
        </VStack>
      </View>

      <Icon
        as={MaterialCommunityIcons}
        name="arrow-left"
        color="#fff"
        size={8}
        // marginTop={100}
        // left={30}
        style={{ position: "absolute", top: 78, left: 20 }}
        onPress={async () => {
          await music!.pauseAsync();
          navigation.goBack();
        }}
      />
      <Icon
        as={MaterialCommunityIcons}
        name={isPlaying ? "music" : "music-off"}
        color="#fff"
        size={8}
        // marginTop={100}
        // left={30}
        style={{ position: "absolute", top: 78, right: 30 }}
        onPress={async () => {
          if (isPlaying) {
            await music!.pauseAsync();
            setPlaying(false);
          } else {
            setPlaying(true);
            music!.playAsync();
          }
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  fab: {
    backgroundColor: appTheme.default.blue,
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 },
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
    // justifyContent: "space-between",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingLeft: 35,
    // paddingRight: 35,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
    marginTop: "15%",
  },
  carouselTitle: {
    fontSize: 20,
    color: "#FFF",
    marginTop: "5%",
    textAlign: "center",
    fontFamily: "Avenir",
    fontWeight: "800",
  },
  carouselImage: {
    width: "100%",
    height: "100%",
  },
});

export default SleepExercise2;
