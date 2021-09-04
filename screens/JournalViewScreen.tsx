import { Text, Fab, VStack, Icon, TextArea, Input } from "native-base";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { StyleSheet } from "react-native";
import appTheme from "../constants/Colors";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { addNewJournal, updateJournal } from "../services/firestore";
import store from "../state/store";
import { ScrollView } from "react-native-gesture-handler";

const JournalViewScreen = ({ navigation, route }) => {
  const isEditing = route.params.title !== "";
  const [title, setTitle] = useState(route.params.title ?? "");
  const [thoughts, setThoughts] = useState(route.params.thoughts ?? "");
  return (
    <SafeAreaView style={styles.container}>
      <VStack px={12} py={20} w="100%" space={2}>
        <Icon
          as={MaterialCommunityIcons}
          name="arrow-left"
          // color={appTheme.default.blue}
          size={8}
          position="absolute"
          // top={20}
          marginTop={94}
          left={2}
          onPress={() => navigation.goBack()}
        />
        <Text
          textAlign="left"
          fontWeight="700"
          color={appTheme.default.blue}
          fontSize={appTheme.default.bigTitleSize}
          fontFamily="Avenir"
        >
          {route.params.title}
        </Text>
        <ScrollView>
          <Text
            textAlign="left"
            fontWeight="400"
            // color={appTheme.default.blue}
            fontSize={appTheme.default.subtitleSize}
            fontFamily="Avenir"
          >
            {route.params.thoughts}
          </Text>
        </ScrollView>
      </VStack>
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
    // flex: 1,
    // justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
    // paddingLeft: 35,
    // paddingRight: 35,
  },
});

export default JournalViewScreen;
