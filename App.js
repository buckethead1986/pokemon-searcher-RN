import React from "react";
import { StyleSheet, Text, ScrollView, View, Picker } from "react-native";
import TextInput from "./components/TextInput";
import PokemonCardImage from "./components/PokemonCardImage";
import Autocomplete from "./components/Autocomplete";
import PokeAutoComplete from "./components/PokeAutoComplete";
import SwipeContainer from "./components/SwipeContainer";

export default class App extends React.Component {
  // state = { pokemon: {} };

  // fetchPokemon = () => {
  //   fetch("https://pokeapi.co/api/v2/pokemon/2")
  //     .then(res => res.json())
  //     .then(json => this.setState({ pokemon: json }));
  // };

  // fetchSpecificPokemon = url => {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(json => this.setState({ pokemon: json }));
  // };

  render() {
    return <SwipeContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "flex-start"
  }
  // selector: {
  //   flex: 1
  // },
  // scrollview: {
  //   flex: 10
  // }
  // spacer: {
  //   width: 50,
  //   height: 50
  // },
  // flexView: {
  //   flex: 1,
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center"
  // }
});
