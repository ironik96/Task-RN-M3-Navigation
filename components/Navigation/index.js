import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductsList } from "../ProductsList";
import { ProductDetails } from "../ProductDetail";

const { Navigator, Screen } = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={ProductsList}
        options={{ title: "Welcome" }}
      />
      <Screen
        name="Product Detail"
        component={ProductDetails}
        options={{ title: "Welcome" }}
      />
    </Navigator>
  );
}
