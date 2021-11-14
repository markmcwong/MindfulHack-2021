import * as React from "react";

import { Image, ScrollView, Text } from "native-base";

export default function ProductScreen({ navigation, route }) {
  return (
    <ScrollView backgroundColor="white" flex={1} zIndex="100">
      {/* <Image source={require("../assets/images/product_banner.png")}></Image> */}
      <Text> hi</Text>
    </ScrollView>
  );
}
