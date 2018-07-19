import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import styles from "../../styles/Styles";

export default class PokemonCardImage extends Component {
  render() {
    return (
      <View style={styles.pokeCardView}>
        <Image
          style={styles.pokeCardImage}
          source={{ uri: this.props.displayPokemon.sprites.front_default }}
        />

        <Text>{this.props.displayPokemon.sprites.front_default}</Text>
      </View>
    );
  }
}
