import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import PokemonCardImage from "./PokemonCardImage";

class PokemonDisplayContainer extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <PokemonCardImage pokemon={this.props.pokemon} />
        </ScrollView>
      </View>
    );
  }
}

export default PokemonDisplayContainer;
