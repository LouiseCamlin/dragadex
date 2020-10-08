import React, { Component } from "react";
import { Image, StyleSheet, View, Button, Alert } from "react-native";
import helpers from "../helpers/helperMethods";

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

  getNameOptions() {
    const guessOptions = this.state.firstThree.slice(0);
    const shuffledOptions = helpers.shuffle(guessOptions);
    return guessOptions.map((queen) => {
      return (
        <View style={styles.buttonContainer} key={queen.name}>
          <Button
            color="black"
            style={styles.button}
            title={queen.name}
            onPress={() => this.checkIfCorrect(queen.name)}
          ></Button>
        </View>
      );
    });
  }

  checkIfCorrect(optionClicked) {
    if (optionClicked === this.state.firstThree[1].name) {
      return Alert.alert("Correct Answer!", "You know your drag queens!");
    }
    return Alert.alert("Wrong answer", "Try a different Queen");
  }

  handleHomePress() {
    this.props.resetPlayState();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{ uri: this.getQueenImage() }}
        />
        {this.getNameOptions()}
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
  buttonContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "#e5007c",
    justifyContent: "center",
    marginBottom: 5,
  },
  container: {
    margin: 0,
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
    height: 60,
    backgroundColor: "#4ecdc4",
  },
});

export default QueenScreen;
