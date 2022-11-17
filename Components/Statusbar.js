import { View, Text, FlatList, Image } from "react-native";
import React from "react";

const Status = [
  {
    id: "1",
    uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Your story",
  },
  {
    id: "2",
    uri: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Leo",
  },
  {
    id: "3",
    uri: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Ben",
  },
  {
    id: "4",
    uri: "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "John",
  },
  {
    id: "5",
    uri: "https://images.unsplash.com/photo-1611485988300-b7530defb8e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Luis",
  },
];

const Statusbar = () => {
  return (
    <View>
      <View
        style={{
          marginTop: 10,
          borderBottomColor: "grey",
          borderBottomWidth: 0.3,
          paddingVertical: 10,
        }}
      >
        <FlatList
          horizontal
          data={Status}
          renderItem={({ item }) => (
            <View key={item.id}>
              <View
                style={{
                  marginHorizontal: 10,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 150,
                    borderWidth: 1.2,
                    borderColor: "#E1036C",
                  }}
                  source={{ uri: item.uri }}
                />
                <Text>{item.name}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Statusbar;
