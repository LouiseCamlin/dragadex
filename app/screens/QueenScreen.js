import React, { Component } from "react";
import { Image, StyleSheet, View, Button } from "react-native";

class QueenScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstThree: this.props.queens.slice(0, 3),
    };
  }

  getQueenImage() {
    const queenToGuess = this.state.firstThree[1];
    const queenImage = Object.values(queenToGuess.image)[0];
    return queenImage;
  }

  handleHomePress() {
    this.props.resetPlayState();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.closeIcon}></View>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{ uri: this.getQueenImage() }}
        />
        <View style={styles.homeButtonContainer}>
          <Button
            color="black"
            style={styles.button}
            title="Home"
            onPress={() => this.handleHomePress()}
          ></Button>
        </View>
      </View>
    );
  }
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
