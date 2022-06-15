import React from "react";
import { TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductsList } from "../ProductsList";
import { ProductDetails } from "../ProductDetail";
import { Cart } from "../Cart";
import { Entypo } from "@expo/vector-icons";

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
        options={({ navigation }) => ({
          title: "Products",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Entypo name="shopping-cart" size={24} color="white" />
            </TouchableOpacity>
          ),
        })}
      />
      <Screen
        name="Product Detail"
        component={ProductDetails}
        options={{ title: "Welcome" }}
      />
      <Screen name="Cart" component={Cart} options={{ title: "cart" }} />
    </Navigator>
  );
}
