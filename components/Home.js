import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { Searchbar, Button } from "react-native-paper";

function Home() {
  return (
    <View styles={homeStyles.container}>
      <View
        style={{
          backgroundColor: "tomato",
          width: 414,
          height: 110,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "AvenirNextCondensed-Bold",
            color: "white",
            fontSize: 30,
            letterSpacing: 2,
            top: 15,
          }}
        >
          CallProtector
        </Text>
      </View>
      <Image
        source={require("/Users/sharonhe/Desktop/Dev/spam-call-detector/assets/Logo.png")}
        style={{
          height: 350,
          width: 350,
          justifyContent: "center",
          alignSelf: "center",
        }}
      />
      <Text
        style={{
          fontSize: 35,
          color: "grey",
          letterSpacing: 3,
          fontFamily: "AppleSDGothicNeo-UltraLight",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        Welcome
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "grey",
          letterSpacing: 3,
          fontFamily: "AppleSDGothicNeo-UltraLight",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        Start by choosing one of the options below
      </Text>
      <View // TODO: dummy navbar
        style={{
          backgroundCoalor: "tomato",
          width: 414,
          height: 60,
          position: "absolute",
          bottom: -377,
        }}
      />
    </View>
  );
}

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
