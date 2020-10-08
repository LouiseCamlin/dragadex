import React from "react";
import { Image, StyleSheet, View, Button } from "react-native";

function QueenScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/Raven.jpg")}
      />
      <View style={styles.homeButtonContainer}>
        <Button
          color="black"
          style={styles.button}
          title="Home"
          onPress={() => props.resetPlayState()}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
