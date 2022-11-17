import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Togglepassword } from "../Components/Togglepassword";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    Togglepassword();
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <View>
        <View>
          <Image
            style={{
              width: 200,
              height: 90,
              resizeMode: "contain",
              alignSelf: "center",
              marginTop: 120,
            }}
            source={require("../assets/instalogo.png")}
          />
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <View
            style={{
              borderWidth: 1,
              borderWidth: 1,
              borderColor: "grey",
              borderRadius: 5,
            }}
          >
            <TextInput
              style={{
                paddingVertical: 8,
                paddingHorizontal: 10,
              }}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Phone number, email or username"
              value={email}
              onChangeText={(autualdata) => setEmail(autualdata)}
            />
          </View>
        </View>
        <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 10,

              borderWidth: 1,
              borderColor: "grey",
              borderRadius: 5,
            }}
          >
            <TextInput
              style={{ width: "90%", paddingVertical: 8 }}
              secureTextEntry={passwordVisibility}
              autoCapitalize="none"
              underlineColorAndroid={"transparent"}
              autoCorrect={false}
              value={password}
              placeholder="Password"
              onChangeText={(actualdata) => setPassword(actualdata)}
            />
            <Pressable onPress={handlePasswordVisibility}>
              <MaterialCommunityIcons
                name={rightIcon}
                size={22}
                color="#232323"
              />
            </Pressable>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
          <TouchableOpacity 
          onPress={() => {navigation.navigate("Feed")}}
          >
            <Text
              style={{
                backgroundColor:
                  email.length < 2 || password.length < 2
                    ? "#acd5f6"
                    : "#1496ff",
                textAlign: "center",
                paddingVertical: 10,
                borderRadius: 5,
                color: "white",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingVertical: 10,
            }}
          >
            <Text style={{ fontSize: 11, color: "grey" }}>
              Forgot your login details?
            </Text>
            <Text
              style={{ fontSize: 11, fontWeight: "bold", paddingHorizontal: 3 }}
            >
              Get help logging in.
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              paddingVertical: 5,
            }}
          >
            <View
              style={{
                borderTopColor: "grey",
                width: 150,
                height: 0,
                borderTopWidth: 0.5,
              }}
            ></View>
            <Text style={{ paddingHorizontal: 20 }}>OR</Text>
            <View
              style={{
                borderTopColor: "grey",
                width: 150,
                height: 0,
                borderTopWidth: 0.5,
              }}
            ></View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome5 name="facebook" size={24} color="#1496ff" />
            <Text
              style={{
                fontSize: 13,
                fontWeight: "bold",
                color: "#1496ff",
                paddingHorizontal: 4,
              }}
            >
              Log in with Facebook
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          borderTopWidth: 0.3,
          alignItems: "center",
          borderTopColor:"grey",
        }}
      >
        <Text style={{ paddingVertical: 10, fontSize:12, color:"grey" }}>Don't have an account?</Text>
        <Text style={{fontSize:12, fontWeight:"bold", paddingHorizontal:3,}}>Sign up</Text>
      </View>
    </View>
  );
};

export default Login;
