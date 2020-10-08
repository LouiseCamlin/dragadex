import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Button } from "react-native";
import QueenScreen from "./QueenScreen";

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queens: null,
      play: false,
    };
    this.resetPlay = this.resetPlay.bind(this);
  }

  componentDidMount() {
    this.getQueens();
  }

  getQueens() {
    return fetch("https://dragrace-api.herokuapp.com/queens")
      .then((res) => res.json())
      .then((queens) => {
        this.setState({
          queens,
        });
      });
  }

  randomiseQueens() {
    const queensArray = this.state.queens.slice(0);
    for (let i = queensArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = queensArray[i];
      queensArray[i] = queensArray[j];
      queensArray[j] = temp;
    }
    this.setState({
      shuffledQueens: queensArray,
      play: true,
    });
  }

  resetPlay() {
    this.setState({
      play: false,
    });
  }

  render() {
    if (this.state.play === true) {
      return (
        <QueenScreen
          queens={this.state.shuffledQueens}
          resetPlayState={this.resetPlay}
        />
      );
    }
    return (
      <View style={styles.background}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/red_logo.png")}
          />
          <Text style={styles.tagline}>Who's that Drag Queen</Text>
        </View>
        <View style={styles.randomiseButton}>
          <Button
            color="black"
            style={styles.button}
            title="Play!"
            onPress={() => this.randomiseQueens()}
          />
        </View>
        <View style={styles.registerButton}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    color: "green",
    backgroundColor: "black",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 350,
    height: 100,
  },
  randomiseButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#e5007c",
    justifyContent: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  tagline: {
    fontSize: 25,
  },
});

export default WelcomeScreen;
