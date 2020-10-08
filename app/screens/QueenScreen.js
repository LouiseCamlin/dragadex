import React from "react";
import { Image, StyleSheet, View } from "react-native";

function QueenScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/Raven.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    color: "green",
    backgroundColor: "black",
  },
  buttonContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "#e5007c",
    justifyContent: "center",
    margin: 5,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "black",
  },
  image: {
    width: "90%",
    height: "80%",
  },
  homeButtonContainer: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});

export default QueenScreen;
