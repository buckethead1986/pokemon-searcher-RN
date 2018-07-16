import React, { Component } from "react";
import { AppRegistry, View, Image, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  pokeView: {
    justifyContent: "center",
    alignItems: "center"
  },
  pokeImage: {
    width: 300,
    height: 300
  }
});

export default class DisplayAnImage extends Component {
  render() {
    return (
      <View style={styles.pokeView}>
        <Image
          style={styles.pokeImage}
          source={{ uri: this.props.pokemon.sprites.front_default }}
        />

        <Text>{this.props.pokemon.sprites.front_default}</Text>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent("DisplayAnImage", () => DisplayAnImage);
