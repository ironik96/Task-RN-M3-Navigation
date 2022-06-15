import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductsList } from "../ProductsList";
import { ProductDetails } from "../ProductDetail";

const { Navigator, Screen } = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "hsl(207, 90%, 64%)" },
        headerTintColor: "white",
      }}
    >
      <Screen
        name="Home"
        component={ProductsList}
        options={{ title: "Products" }}
      />
      <Screen
        name="Product Detail"
        component={ProductDetails}
        options={{ title: "Welcome" }}
      />
    </Navigator>
  );
}
