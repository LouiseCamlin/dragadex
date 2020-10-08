import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Button } from "react-native";

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queens: null,
      play: false,
    };
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

  render() {
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
            onPress={() => console.log(this.state.queens[0])}
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