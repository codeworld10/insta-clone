import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Bottommenu = () => {
  const navigation = useNavigation();
  return (
    <View>
     <View style={{display:"flex", flexDirection:"row", paddingBottom:10, justifyContent:"space-between", paddingHorizontal:20, borderTopColor:"grey", borderTopWidth:0.3,paddingVertical:10}}>
     <TouchableOpacity>
     <MaterialCommunityIcons name="home-variant" size={27} color="black" />
     </TouchableOpacity>
     <TouchableOpacity>
     <Fontisto name="search" size={27} color="black" />
     </TouchableOpacity>
     <TouchableOpacity>
     <MaterialCommunityIcons name="play-box-multiple" size={27} color="black" />
     </TouchableOpacity>
     <TouchableOpacity>
     <Feather name="send" size={27} color="black" />
     </TouchableOpacity>
     <TouchableOpacity onPress={() => {navigation.navigate("Profile")}}>
     <Image
     style={{height:25, width:25, resizeMode:"contain", borderRadius:150}}
     source={require("../assets/usm.png")}
     />
     </TouchableOpacity>
     </View>
    </View>
  )
}

export default Bottommenu