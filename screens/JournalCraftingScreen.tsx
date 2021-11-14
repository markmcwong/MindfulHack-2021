import * as React from "react";

import {
  Fab,
  Icon,
  IconButton,
  Input,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextArea,
  VStack,
  View,
} from "native-base";
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { addNewJournal, updateJournal } from "../services/firestore";

import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import appTheme from "../constants/Colors";
import store from "../state/store";
import { useSelector } from "react-redux";
import { useState } from "react";

const JournalCraftingScreen = ({ navigation, route }) => {
  const user = useSelector((state: any) => state.user);
  const isEditing = route.params.title !== "";
  const [title, setTitle] = useState(route.params.title ?? "");
  const [thoughts, setThoughts] = useState(route.params.thoughts ?? "");
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={styles.container}
      >
        <View w="100%">
          <VStack>
            <Text
              textAlign="center"
              fontWeight="700"
              color={appTheme.default.blue}
              fontSize={appTheme.default.bigTitleSize}
              fontFamily="Avenir"
            >
              {"What are you\nthinking?"}
            </Text>
          </VStack>
          <VStack marginTop={5} width="100%" px={8} marginBottom={50} space={5}>
            <Input
              value={title}
              placeholder="Title"
              onChangeText={(e: string) => setTitle(e)}
              borderColor="grey"
              borderRadius={15}
            />
            <TextArea
              borderColor="grey"
              // color="orange"
              // width="100%"
              h="60%"
              value={thoughts}
              onChangeText={(e: string) => setThoughts(e)}
              numberOfLines={4}
              borderRadius={20}
              placeholder="My thoughts"
              padding={4}
            />
          </VStack>
          {/* <IconButton
            position="absolute"
            top={0}
            left={5}
            borderRadius={25}
            onPress={() => navigation.goBack()}
            icon={
              <Icon
                as={<AntDesign name="arrowleft" />}
                color="#000"
                size="md"
              />
            }
          /> */}
        </View>
      </TouchableWithoutFeedback>
      <View position="absolute" bottom={0}>
        <Fab
          right={5}
          bottom={8}
          // placement="bottom-right"
          // position="absolute"
          size="sm"
          style={styles.fab}
          onPress={async () => {
            if (title === "" && thoughts === "") {
              alert("Title and Thoughts cannot be empty!");
              return;
            }
            if (isEditing) {
              await updateJournal(route.params.id, title, thoughts);
            } else {
              await addNewJournal(title, thoughts, user.uid);
            }
            store.dispatch({ type: "SHOW_FAB" });
            navigation.navigate("Auth");
          }}
          icon={<Icon as={<AntDesign name="check" />} color="#FFF" size="sm" />}
        />
      </View>
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
    // justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
    // paddingLeft: 35,
    // paddingRight: 35,
  },
});

export default JournalCraftingScreen;
