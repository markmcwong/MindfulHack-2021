import {
  VStack,
  Icon,
  Text,
  View,
  IconButton,
  Button,
  HStack,
  Image,
} from "native-base";
import * as React from "react";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LogBox, StyleSheet } from "react-native";
import {
  Bubble,
  Composer,
  GiftedChat,
  InputToolbar,
  MessageText,
  Send,
  Time,
} from "react-native-gifted-chat";
import { connect } from "react-redux";
import { fetchMessagesByGroupId, sendNewMessage } from "../services/firestore";
import { SafeAreaView } from "react-native-safe-area-context";
import appTheme from "../constants/Colors";
import store from "../state/store";

LogBox.ignoreAllLogs();

const mapStateToProps = (state: any, props: any) => {
  return { user: state.user };
};

const ChatBox = ({ route, user, navigation }) => {
  const [messages, setMessages] = useState<any[]>([]);
  useLayoutEffect(() => {
    fetchMessagesByGroupId(route.params.id, (val: any) =>
      setMessages(
        val.map((x) => {
          console.log(x);
          return {
            ...x,
            user: {
              _id: x.user._id,
              name: user.uiduid == x.user._id ? user.name : route.params.name,
              avatar:
                user.name !== "Amanda"
                  ? require("../assets/images/mindfulhack_amanda.png")
                  : require("../assets/images/mindfulhack_sleep_happy.png"),
            },
          };
        })
      )
    );
  }, []);
  useEffect(() => {
    // console.log();
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    // console.log(messages[0].text);
    sendNewMessage(route.params.id, messages[0].text, user.uid);
  }, []);

  const renderInputToolbar = (props: any) => (
    // <ContainerInput></ContainerInput>
    <InputToolbar {...props} containerStyle={styles.inputToolbar} />
  );

  const renderComposer = (props) => (
    <Composer
      {...props}
      textInputStyle={styles.textInput}
      multiline={false}
      composerHeight={50}
    />
  );

  const renderSend = (props) => (
    <Send {...props} containerStyle={styles.sendBtn}>
      <Icon as={MaterialCommunityIcons} name="send" color="#3979ee" size={8} />
    </Send>
  );

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: appTheme.default.orange,
            borderRadius: 30,
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderBottomRightRadius: 30,
            borderTopRightRadius: 30,
            marginBottom: 10,
          }, // Changes dynamically
          left: {
            backgroundColor: "#FFF",
            borderRadius: 30,
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderTopLeftRadius: 30,
            borderColor: appTheme.default.orange,
            borderWidth: 1.5,
            marginBottom: 10,
            borderBottomLeftRadius: 30,
          }, // Changes dynamically
        }}
        renderMessageText={(props) => {
          return (
            <MessageText
              {...props}
              textStyle={{
                left: { color: "#000" }, // Does not change dynamically
                right: { color: "#FFF" },
              }}
            />
          );
        }}
        renderTime={(props) => (
          <Time
            {...props}
            timeTextStyle={{
              left: { color: "#000", fontFamily: "Avenir" }, // Does not change dynamically
              right: { color: "#FFF", fontFamily: "Avenir" },
            }}
          />
        )}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View
        style={{
          ...styles.container,
          // backgroundColor: user.isYouth ? "#FF7200" : "#78C9A7",
        }}
      >
        <HStack
          style={{
            backgroundColor: "#FFF",
            alignSelf: "start",
            alignItems: "center",
            // justifyContent: "space-between",
            // position: "absolute",
            height: 70,
            width: "100%",
            // borderBottomLeftRadius: 20,
            // borderBottomRightRadius: 20,
            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: { width: 1, height: 5 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 5,
          }}
        >
          <IconButton
            zIndex={20}
            icon={
              <Icon
                as={MaterialCommunityIcons}
                name="arrow-left"
                color="grey"
                size={10}
              />
            }
            onPress={() => {
              store.dispatch({
                type: "SHOW_FAB",
                page: "chat",
              });
              navigation.goBack();
            }}
          ></IconButton>
          <Button
            variant="unstyled"
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              source={
                route.params.name == "Amanda"
                  ? require("../assets/images/mindfulhack_amanda.png")
                  : require("../assets/images/mindfulhack_sleep_happy.png")
              }
              alt="profile"
              height={39}
              width={39}
              borderRadius={20}
            />
          </Button>
          <Text fontSize={18} fontWeight={600}>
            {(route.params && route.params.name) ?? "Temporary text"}
          </Text>
        </HStack>
        <VStack flex={1} w="100%">
          <GiftedChat
            renderUsernameOnMessage={true}
            onSend={(messages) => onSend(messages)}
            messages={messages}
            user={{ _id: user.uid }}
            renderInputToolbar={renderInputToolbar}
            renderComposer={renderComposer}
            renderSend={renderSend}
            renderBubble={renderBubble}
            // minInputToolbarHeight={100}
            // render
          />
        </VStack>
      </View>
    </SafeAreaView>
  );
};

export default connect(mapStateToProps)(ChatBox);

// const AuthNavigator = createStackNavigator();
// const DepositStack = ({ navigation }) => (
//   <AuthNavigator.Navigator
//     screenOptions={{ headerShown: false }}
//     initialRouteName="Form"
//   >
//     <AuthNavigator.Screen name="Scan" component={TabOneScreen} />

//     {/* <AuthNavigator.Screen name="Signup" component={SignupScreen} /> */}
//   </AuthNavigator.Navigator>
// );
// export default DepositStack;

const styles = StyleSheet.create({
  sendBtn: {
    paddingBottom: 15,
    paddingRight: 15,
  },
  textInput: {
    backgroundColor: "#ececec",
    marginLeft: 20,
    marginTop: 0,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    // marginLeft: 15,
    marginRight: 15,
    // marginBottom: 10,
    paddingTop: 15,
    borderTopRightRadius: 30,
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    fontFamily: "Avenir",
    textAlignVertical: "center",
    // paddingBottom: 20,
    lineHeight: 20,
    // marginRight: 10,
    borderRadius: 20,
  },
  inputToolbar: {
    // backgroundColor: "grey",
    // paddingLeft: 20,
    // paddingRight: 20,
    // height: 65,asdasd
    // marginTop: 10,
    paddingTop: 10,
    marginBottom: -5,
  },
  container: {
    flex: 1,
    // paddingTop: 20,
    // paddingBottom: 12,
    alignItems: "center",
    overflow: "scroll",
    // justifyContent: "center",
    // backgroundColor: "#ffe4b8",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  greenText: {
    color: "#147460",
  },
});
