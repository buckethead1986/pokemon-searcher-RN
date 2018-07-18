import Autocomplete from "react-native-autocomplete-input";
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PokemonDisplayContainer from "./PokemonDisplayContainer";

class AutoCompleteSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPokemon: {},
      pokemon: [],
      query: ""
    };
  }

  componentDidMount() {
    fetch(`${this.props.url}/pokemon/?limit=801&offset=0`)
      .then(res => res.json())
      .then(json => {
        const { results: pokemon } = json;
        this.setState({ pokemon });
      });
    this.fetchPokemon("http://pokeapi.co/api/v2/pokemon/1");
  }

  fetchPokemon = url => {
    fetch(url)
      .then(res => res.json())
      .then(json =>
        this.setState({ displayPokemon: json }, () => this.resetQuery())
      );
  };

  resetQuery = () => {
    this.setState({ query: "" });
  };

  findPokemon(query) {
    if (query === "") {
      return [];
    }

    const { pokemon } = this.state;
    const regex = new RegExp(`${query.trim()}`, "i");
    return pokemon.filter(poke => poke.name.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    const pokemon = this.findPokemon(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    return (
      <View keyboardShouldPersistTaps="always">
        <View style={styles.textView}>
          <Text style={styles.text}>Search Pokemon by Name</Text>
        </View>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          data={
            pokemon.length === 1 && comp(query, pokemon[0].name) ? [] : pokemon
          }
          defaultValue={query}
          blurOnSubmit={true}
          keyboardShouldPersistTaps="always"
          onChangeText={text => this.setState({ query: text })}
          placeholder="Enter Pokemon Name"
          renderItem={({ name, url }) => (
            <TouchableOpacity
              onPress={() =>
                this.setState({ query: name }, this.fetchPokemon(url))}
            >
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          )}
          onSubmitEditing={() => {
            this.state.query !== "" ? this.fetchPokemon(pokemon[0].url) : "";
          }}
        />
        {Object.keys(this.state.displayPokemon).length !== 0 ? (
          <PokemonDisplayContainer pokemon={this.state.displayPokemon} />
        ) : (
          ""
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  autocompleteContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  itemText: {
    fontSize: 15,
    margin: 10,
    marginLeft: 10,
    marginRight: 10
  },
  textView: {
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    color: "black"
  }
});

export default AutoCompleteSearchBar;
