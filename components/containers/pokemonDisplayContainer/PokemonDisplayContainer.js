import React, { Component } from "react";
import { View } from "react-native";
import AutoCompleteSearchBar from "./searchBar/AutoCompleteSearchBar";

class PokemonDisplayContainer extends Component {
  render() {
    return (
      <View>
        <AutoCompleteSearchBar url={this.props.url} />
      </View>
    );
  }
}

export default PokemonDisplayContainer;
