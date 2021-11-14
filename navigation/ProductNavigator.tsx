import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductDetailScreen from "../screens/ProductDetail";
import ProductScreen from "../screens/ProductScreen";
import ShopScreen from "../screens/ShopScreen";

const ProductNavigator = createStackNavigator();

const ProductStack = () => (
  <ProductNavigator.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="ShopScreen"
  >
    <ProductNavigator.Screen
      name="ProductDetailScreen"
      component={ProductDetailScreen}
    />
    <ProductNavigator.Screen name="ShopScreen" component={ShopScreen} />
    <ProductNavigator.Screen name="ProductScreen" component={ProductScreen} />
  </ProductNavigator.Navigator>
);

export default ProductStack;
