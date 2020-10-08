import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Button } from "react-native";
import QueenScreen from "./QueenScreen";
import helpers from "../helpers/helperMethods";
import RulesScreen from "./RulesScreen";

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queens: null,
      play: false,
      score: 0,
      viewRules: false,
    };
    this.toggleRules = this.toggleRules.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
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

  togglePlay() {
    console.log("play");
    if (this.state.play === false) {
      this.setState({
        play: true,
      });
    } else {
      this.setState({
        play: false,
      });
    }
  }

  toggleRules() {
    if (this.state.viewRules === false) {
      this.setState({
        viewRules: true,
      });
    } else {
      this.setState({
        viewRules: false,
      });
    }
  }

  render() {
    if (this.state.play === true) {
      return (
        <QueenScreen
          queens={this.state.queens}
          resetPlayState={this.togglePlay}
          score={this.state.score}
        />
      );
    }
    if (this.state.viewRules === true) {
      return <RulesScreen toggleRules={this.toggleRules} />;
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
          <Button color="black" title="Play!" onPress={this.togglePlay} />
        </View>
        <View style={styles.rulesButton}>
          <Button
            color="black"
            title="How To Play"
            onPress={this.toggleRules}
          />
        </View>
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
  rulesButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  tagline: {
    fontSize: 25,
  },
});

export default WelcomeScreen;
