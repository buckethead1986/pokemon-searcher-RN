import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import PokemonSearchBar from "./PokemonSearchBar";

class PokemonDisplayContainer extends Component {
  render() {
    return (
      <View>
        <PokemonSearchBar
          url={this.props.url}
          changeShownType={this.props.changeShownType}
        />
      </View>
    );
  }
}

export default PokemonDisplayContainer;
