import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native";
import { ProductsList } from "../ProductsList";
import { ProductDetails } from "../ProductDetail";
import { Cart } from "../Cart";
import { Entypo } from "@expo/vector-icons";
import RootNavigator from ".";

const { Navigator, Screen } = createDrawerNavigator();

export default function Drawer() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: "hsl(207, 90%, 64%)" },
        headerTintColor: "white",
      }}
    >
      <Screen
        name="Home"
        component={RootNavigator}
        options={({ navigation }) => ({
          title: "Products",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Entypo name="shopping-cart" size={24} color="white" />
            </TouchableOpacity>
          ),
        })}
      />
      <Screen name="Cart" component={Cart} options={{ title: "cart" }} />
    </Navigator>
  );
}
