import { Drawer, View, Text, HStack, Badge, Button } from "native-base";
import * as React from "react";
import { useEffect, useState } from "react";
import { SwipeablePanel } from "rn-swipeable-panel";
import { StyleSheet } from "react-native";

const options = [
  "Cantonese",
  "Mandarin",
  "Spanish",
  "English",
  "Korean",
  "Arabic",
];

const SlideUpDrawer = ({ isPanelActive, callback, setSelectedLanguages }) => {
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    noBackgroundOpacity: false,
    // openLarge: true,
    showCloseButton: true,
    onClose: () => callback(false),
    onPressCloseButton: () => {
      callback(false);
    },
  });

  const [active, setActive] = useState<String[]>([]);
  useEffect(() => {
    setSelectedLanguages(active);
  }, [active]);
  return (
    <SwipeablePanel {...panelProps} isActive={isPanelActive}>
      <View style={styles.container}>
        <Text style={styles.title}>Languages</Text>
        <HStack flexWrap="wrap">
          {options.map((option, index) => (
            <Button
              key={index}
              marginRight={3}
              marginBottom={3}
              borderRadius={20}
              backgroundColor={
                active.indexOf(option) != -1 ? "#F5A623" : "#fff"
              }
              borderColor={active.indexOf(option) != -1 ? "#F5A623" : "#172D55"}
              borderWidth={1}
              _text={{
                // fontSize: 14,
                color: active.indexOf(option) != -1 ? "#FFF" : "#000",
              }}
              onPress={() => {
                active.indexOf(option) != -1
                  ? setActive(active.filter((x) => x != option))
                  : setActive([...active, option]);
                console.log(active);
              }}
            >
              {option}
            </Button>
          ))}
        </HStack>
      </View>
    </SwipeablePanel>
  );
};

export default SlideUpDrawer;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    // fontWeight: "bold",
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
