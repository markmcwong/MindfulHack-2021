import {
  Text,
  Fab,
  VStack,
  Icon,
  View,
  Pressable,
  ScrollView,
} from "native-base";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import appTheme from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import firebase from "firebase";
import { deleteJournal, fetchJournals } from "../services/firestore";
import { SwipeListView } from "react-native-swipe-list-view";
import { useSelector } from "react-redux";
import store from "../state/store";
import { showFab } from "../state/actions";
import { useFocusEffect } from "@react-navigation/native";

const JournalScreen = ({ navigation, route }) => {
  const [journals, setJournals] = useState<any>([]);
  const shouldShowFab = useSelector((state: any) => state.fab);
  const user = useSelector((state: any) => state.user);

  useFocusEffect(
    React.useCallback(() => {
      store.dispatch({
        type: "SHOW_FAB",
        page: "journal",
      });
    }, [])
  );
  useEffect(() => {
    // timeAgo;
    fetchJournals(user.uid, (data: any) => {
      setJournals(
        data.reduce((groups, game) => {
          const tempCreatedAt = game.createdAt.toDate();
          tempCreatedAt.setSeconds(tempCreatedAt.getSeconds() + 28800);
          const date = tempCreatedAt.toISOString().split("T")[0];
          if (!groups[date]) {
            groups[date] = [];
          }
          groups[date].push(game);
          return groups;
        }, {})
      );
      // setJournals(groups);
      // console.log(data);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <VStack alignSelf="flex-start">
        <Text
          fontWeight="700"
          fontSize={appTheme.default.titleSize}
          fontFamily="Avenir"
        >
          Journal
        </Text>
        <Text
          fontWeight="300"
          py={13}
          lineHeight={20}
          fontFamily="Avenir"
          fontSize={appTheme.default.bodyTextSize}
        >
          {"Write down your thoughts and moments,\nanytime and anywhere!"}
        </Text>
      </VStack>
      <ScrollView
        w="100%"
        marginBottom={50}
        showsVerticalScrollIndicator={false}
      >
        {Object.keys(journals)
          .sort((a, b) => -a.localeCompare(b))
          .map((key) => {
            return (
              <VStack
                alignSelf="flex-start"
                marginTop={5}
                width="100%"
                space={4}
                key={key}
              >
                <Text
                  fontWeight="700"
                  color={appTheme.default.blue}
                  fontSize={appTheme.default.titleSize}
                >
                  {key}
                </Text>
                <SwipeListView
                  data={journals[key]}
                  renderItem={(data: any) => (
                    <Pressable
                      onPress={() => {
                        store.dispatch({
                          type: "HIDE_FAB",
                          page: "journal",
                        });
                        navigation.navigate("ViewJournal", {
                          title: data.item.title,
                          thoughts: data.item.thoughts,
                        });
                      }}
                    >
                      <VStack
                        // key={index}
                        width="100%"
                        backgroundColor="#F2F2F2"
                        borderWidth={1}
                        borderRadius={20}
                        padding={5}
                        marginBottom={3}
                      >
                        <Text
                          fontWeight="500"
                          fontSize={appTheme.default.subtitleSize}
                        >
                          {data.item.title}
                        </Text>
                        <Text
                          fontWeight="300"
                          paddingTop={1}
                          fontSize={appTheme.default.bodyTextSize}
                          noOfLines={2}
                          ellipsizeMode="tail"
                        >
                          {data.item.thoughts}
                        </Text>
                      </VStack>
                    </Pressable>
                  )}
                  previewRowKey={"0"}
                  previewOpenValue={-40}
                  previewOpenDelay={3000}
                  renderHiddenItem={(data: any, rowMap) => (
                    <View style={styles.rowBack} marginBottom={3}>
                      <Pressable
                        backgroundColor={appTheme.default.pink}
                        borderRadius={20}
                        height="100%"
                        justifyContent="center"
                        p={3}
                        w="50%"
                        onPress={() => deleteJournal(data.item.id)}
                      >
                        <Icon as={<AntDesign name="delete" />} size="sm" />
                        {/* <Text>Right</Text> */}
                      </Pressable>
                      <Pressable
                        backgroundColor={appTheme.default.blue}
                        borderRadius={20}
                        height="100%"
                        justifyContent="center"
                        alignItems="flex-end"
                        p={3}
                        w="50%"
                        onPress={() => {
                          store.dispatch({
                            type: "HIDE_FAB",
                            page: "journal",
                          });
                          navigation.navigate("NewJournal", {
                            id: data.item.id,
                            title: data.item.title,
                            thoughts: data.item.thoughts,
                          });
                        }}
                      >
                        <Icon as={<AntDesign name="edit" />} size="sm" />
                        {/* <Text>Right</Text> */}
                      </Pressable>
                    </View>
                  )}
                  leftOpenValue={50}
                  rightOpenValue={-50}
                />
                {/* {journals[key].map((item: any, index: number) => (
                ))} */}
              </VStack>
            );
          })}
      </ScrollView>
      {shouldShowFab.show && shouldShowFab.page == "journal" && (
        <Fab
          right={10}
          bottom={100}
          // placement="bottom-right"
          // position="relative"
          size="sm"
          style={styles.fab}
          onPress={() => {
            store.dispatch({ type: "HIDE_FAB" });
            navigation.navigate("NewJournal", { title: "", thoughts: "" });
          }}
          icon={<Icon as={<AntDesign name="edit" />} size="sm" />}
        />
      )}
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
    justifyContent: "flex-start",
    paddingLeft: 35,
    paddingRight: 35,
    height: "100%",
  },
  rowBack: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default JournalScreen;
