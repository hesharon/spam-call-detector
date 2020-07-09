import { Searchbar, Button } from "react-native-paper";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { useDimensions } from "@react-native-community/hooks";

function Lookup() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  // console.log(useDimensions());  // finding dimensions of screen

  return (
    <SafeAreaView style={lookUpStyles.container}>
      <Text style={titleStyles.contianer}>Spam Number Search</Text>
      <Image
        source={require("/Users/sharonhe/Desktop/Dev/spam-call-detector/assets/magnify_glass.png")}
        style={{ width: 150, height: 150, bottom: 70 }}
      />
      <View style={{ width: 350 }}>
        <Searchbar
          placeholder="Enter number"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={{ top: 20 }}>
        <Button
          mode="contained"
          color="tomato"
          onPress={() => console.log("Pressed")} // TODO: currently a dummy function
          labelStyle={{ color: "white" }}
        >
          Submit
        </Button>
      </View>
      <View // TODO: dummy navbar
        style={{
          backgroundColor: "tomato",
          width: 414,
          height: 60,
          position: "absolute",
          bottom: 0,
        }}
      />
    </SafeAreaView>
  );
}

const lookUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const titleStyles = StyleSheet.create({
  contianer: {
    color: "#545454",
    fontSize: 30,
    letterSpacing: 3,
    bottom: 150,
  },
});

export default Lookup;
