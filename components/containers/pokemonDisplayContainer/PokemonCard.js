import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import PokemonType from "./PokemonType";
import PokemonStats from "./PokemonStats";
import ImageContainer from "../imageContainer/ImageContainer";
import { capitalize } from "../../helperMethods/HelperMethods";

export default class PokemonCard extends Component {
  render() {
    return (
      <View>
        <ImageContainer displayPokemon={this.props.displayPokemon} />

        <PokemonType
          types={this.props.displayPokemon.types}
          changeShownType={this.props.changeShownType}
        />
        <PokemonStats displayPokemon={this.props.displayPokemon} />

        <Text>{this.props.displayPokemon.sprites.front_default}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: "center",
    margin: 20
  }
});
