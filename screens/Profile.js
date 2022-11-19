import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Bottommenu from "../Components/Bottommenu";

const Allposts = [
  {
    id: "1",
    uri: "https://images.unsplash.com/photo-1667835949430-a2516cc93d27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "2",
    uri: "https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "3",
    uri: "https://images.unsplash.com/photo-1668712229867-fefdeb0e3e23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "4",
    uri: "https://images.unsplash.com/photo-1667835949430-a2516cc93d27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "5",
    uri: "https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "6",
    uri: "https://images.unsplash.com/photo-1668712229867-fefdeb0e3e23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
 

 
];

const Profile = () => {
  return (
    <View style={{flex:1, justifyContent:"space-between"}}>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <View>
            <Image
              style={{
                width: 110,
                height: 110,
                borderRadius: 150,
                resizeMode: "contain",
              }}
              source={require("../assets/usm.png")}
            />
          </View>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "400", color: "grey" }}>
              Muhammad Usman
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  borderWidth: 0.5,
                  paddingHorizontal: 50,
                  paddingVertical: 7,
                  marginTop: 10,
                  fontWeight: "bold",
                  borderColor: "grey",
                }}
              >
                Edit profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
          <Text>Muhammad Usman</Text>
          <Text>
            Website developer 💻{"\n"}
            App developer 📴 {"\n"}
          </Text>
          <Text>www.maniwebdev.com</Text>
        </View>
        <View style={{ borderWidth: 0.5, borderColor: "grey" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              paddingVertical: 10,
            }}
          >
            <Text>
              7 {"\n"}
              Posts
            </Text>
            <Text>
              50 {"\n"}
              Followers
            </Text>
            <Text>
              2 {"\n"}
              Following
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            borderBottomWidth: 0.5,
            borderBottomColor: "grey",
            paddingVertical: 10,
          }}
        >
          <MaterialCommunityIcons name="dots-grid" size={26} color="grey" />
          <MaterialCommunityIcons
            name="view-carousel-outline"
            size={26}
            color="grey"
          />
          <MaterialCommunityIcons
            name="play-box-multiple"
            size={26}
            color="grey"
          />
          <MaterialIcons name="bookmark-border" size={26} color="grey" />
          <FontAwesome5 name="user-circle" size={26} color="grey" />
        </View>
        <View>
        <FlatList
          data={Allposts}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                margin: 1,
              }}
            >
              <Image
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: 100,
                }}
                source={{ uri: item.uri }}
              />
            </View>
          )}
          
        />
      </View>
      </View>
     <View>
     <Bottommenu />
     </View>
    </View>
  );
};

export default Profile;
