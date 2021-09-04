import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { NativeBaseProvider } from "native-base";
import firebase from "firebase";
import { Provider } from "react-redux";
import store from "./state/store";
import { getUserRecord } from "./services/firestore";
// import { useNavigation } from "@react-navigation/native";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      console.log("We are authenticated now!");
      getUserRecord(user?.uid).then((x) =>
        store.dispatch({
          type: "LOGIN",
          name: user?.displayName,
          uid: user?.uid,
        })
      );
      // useNavigation().navigate("Auth");
    } else {
      store.dispatch({
        type: "LOGOUT",
      });
    }
  });

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <NativeBaseProvider>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </Provider>
    );
  }
}
