import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feed from "./screens/Feed";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import Profile from "./screens/Profile";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{
            headerTitleAlign: "center",
            headerLeft: () => (
              <TouchableOpacity
                style={{ display: "flex", alignItems: "center" }}
                onPress=""
              >
                <Image
                  style={{
                    width: 120,
                    height: 50,
                    resizeMode: "contain",
                    alignSelf: "center",
                  }}
                  source={require("./assets/instalogo.png")}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                }}
                onPress=""
              >
                <Octicons
                  style={{ paddingHorizontal: 10 }}
                  name="diff-added"
                  size={24}
                  color="black"
                />
                <AntDesign name="hearto" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTitleAlign: "center",
            headerLeft: () => (
              <TouchableOpacity onPress="">
                <AntDesign name="setting" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress="">
              <Feather name="user-plus" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
