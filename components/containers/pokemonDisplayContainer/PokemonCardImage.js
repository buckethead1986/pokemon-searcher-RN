import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import PokemonType from "./PokemonType";
import styles from "../../styles/Styles";

export default class PokemonCardImage extends Component {
  render() {
    return (
      <View>
        <View style={styles.pokeCardView}>
          <Image
            style={styles.pokeCardImage}
            source={{ uri: this.props.displayPokemon.sprites.front_default }}
          />
        </View>
        <PokemonType
          types={this.props.displayPokemon.types}
          onPress={this.props.onPress}
        />

        <Text>{this.props.displayPokemon.sprites.front_default}</Text>
      </View>
    );
  }
}
