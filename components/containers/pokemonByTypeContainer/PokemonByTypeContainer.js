import React, { Component } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import PokemonByType from "./PokemonByType";

class PokemonByTypeContainer extends Component {
  // state = { display: {} };
  //
  // componentDidMount() {
  //   fetch(`https://pokeapi.co/api/v2/type/1`)
  //     .then(res => res.json())
  //     .then(json => this.setState({ display: json }));
  // }

  createPokemonList = () => {
    const pokemonList = this.props.shownType.pokemon.map(pokemon => {
      return (
        <PokemonByType
          key={`${this.props.shownType.name}-${pokemon.pokemon.name}`}
          url={this.props.url}
          pokemon={pokemon.pokemon}
          shownType={this.props.shownType}
          changeSwipePage={this.props.changeSwipePage}
        />
      );
    });
    return pokemonList;
  };

  render() {
    return (
      <ScrollView>
        {Object.keys(this.props.shownType).length !== 0 ? (
          this.createPokemonList()
        ) : (
          <Text>Hmm, no pokemon yet</Text>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});

export default PokemonByTypeContainer;
