import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import Bottommenu from "./Bottommenu";
import Statusbar from "./Statusbar";
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Postsfeed = [
  {
    id: "1",
    uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    post: "https://images.unsplash.com/photo-1667996680416-fd436c6a229a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "Mark",
  },
  {
    id: "2",
    uri: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    post: "https://images.unsplash.com/photo-1668405409882-0b3a8b6fc912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Leo",
  },
  {
    id: "3",
    uri: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    post: "https://images.unsplash.com/photo-1668635716727-aa176f3204d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "Ben",
  },
  {
    id: "4",
    uri: "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    post: "https://images.unsplash.com/photo-1668680828441-a4e75575a248?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "John",
  },
  {
    id: "5",
    uri: "https://images.unsplash.com/photo-1611485988300-b7530defb8e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    post: "https://images.unsplash.com/photo-1664618221700-c741183ff4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8QkpKTXR0ZURKQTR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "Luis",
  },
];

const Posts = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View>
        <View>
         <Statusbar />
        </View>
      </View>

      <FlatList
        data={Postsfeed}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View key={item.id}>
          <View style={{borderColor:"grey", borderWidth:0.5, paddingVertical:10, marginTop:20, borderRadius:10, paddingHorizontal:2,}}>
            <View style={{display:"flex", flexDirection:"row", alignItems:"center", paddingVertical:0, paddingHorizontal:10}}>
                <Image
                  source={{ uri: item.uri }}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius:150,
                   
                    resizeMode:"contain"
                  }}
                />
                <Text style={{fontWeight:"bold", paddingHorizontal:5, fontSize:16}}>{item.name}</Text>
            </View>
            <View>
            <Image
            style={{width:"100%", height:350, resizeMode:"cover",  marginTop:5,}}
            source={{uri: item.post}}
            />
            </View>
            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", paddingHorizontal:10, paddingVertical:10}}>
            <View style={{display:"flex", flexDirection:"row"}}>
            <AntDesign  name="hearto" size={28} color="black" />
            <Ionicons style={{paddingHorizontal:10}} name="ios-chatbubble-outline" size={28} color="black" />
            <Feather name="send" size={28} color="black" />
            </View>
            <View>
            <Octicons name="bookmark" size={28} color="black" />
            </View>
            </View>
            <View style={{display:"flex", flexDirection:"row"}}>
            <Text style={{paddingHorizontal:10, fontWeight:"bold", fontSize:16}}>{item.name}</Text>
            <Text>We are feeling basic like design 😄</Text>
            </View>
            </View>
            
           
          </View>
        )}
        onEndReachedThreshold={0.01}
      />

      

      {/* </ScrollView> */}
      <View>
      <Bottommenu />
      </View>
    </View>
  );
};

export default Posts;
