import React, { Component } from "react";
import { Image, StyleSheet, View, Button, Alert, Text } from "react-native";
import helpers from "../helpers/helperMethods";

class QueenScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allQueens: this.props.queens,
      randomIndex: this.getRandomIndex(),
    };
  }

  getRandomIndex() {
    return Math.floor(Math.random() * (153 - 0));
  }

  getQueenImage() {
    const queenToGuess = this.props.queens[this.state.randomIndex];
    const queenImage = Object.values(queenToGuess.image)[0];
    return queenImage;
  }

  getNameOptions() {
    const wrongAnswer1 = this.props.queens[this.getRandomIndex()];
    const wrongAnswer2 = this.props.queens[this.getRandomIndex()];
    const correctAnswer = this.props.queens[this.state.randomIndex];
    if (wrongAnswer1 === correctAnswer || wrongAnswer2 === correctAnswer) {
      wrongAnswer1 = this.props.queens[this.getRandomIndex()];
      wrongAnswer2 = this.props.queens[this.getRandomIndex()];
    }

    let answerArray = [];
    answerArray.push(wrongAnswer1, wrongAnswer2, correctAnswer);

    const shuffledOptions = helpers.shuffle(answerArray);
    return shuffledOptions.map((queen) => {
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
