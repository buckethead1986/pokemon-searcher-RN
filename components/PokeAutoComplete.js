import Autocomplete from "react-native-autocomplete-input";
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PokemonCardImage from "./PokemonCardImage";
import PokemonDisplayContainer from "./PokemonDisplayContainer";

const API = "https://pokeapi.co/api/v2";
// const ROMAN = ["", "I", "II", "III", "IV", "V", "VI", "VII"];

class AutocompleteExample extends Component {
  // static renderPokemon(pokemon) {
  //   // const { title, director, opening_crawl, episode_id } = film;
  //   const { name, url } = pokemon;
  //   // const roman = episode_id < ROMAN.length ? ROMAN[episode_id] : episode_id;
  //   // this.props.fetchSpecificPokemon(url);
  //   // return (
  //   //   <View>
  //   //     <Text style={styles.directorText}>({name})</Text>
  //   //     <Text style={styles.openingText}>{url}</Text> //this will fetch pokemon
  //   //   </View>
  //   // );
  // }

  constructor(props) {
    super(props);
    this.state = {
      displayPokemon: {},
      pokemon: [],
      query: ""
    };
  }

  componentDidMount() {
    fetch(`${API}/pokemon/?limit=801&offset=0`)
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
  // container: {
  //   // backgroundColor: "#F5FCFF",
  //   flex: 1,
  //   paddingTop: 10,
  //   paddingBottom: 10
  // },
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
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: "#F5FCFF",
    marginTop: 8
  },
  textView: {
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    color: "black"
  }
  // infoText: {
  //   textAlign: "center"
  // },
  // titleText: {
  //   fontSize: 18,
  //   fontWeight: "500",
  //   marginBottom: 10,
  //   marginTop: 10,
  //   textAlign: "center"
  // },
  // directorText: {
  //   color: "grey",
  //   fontSize: 12,
  //   marginBottom: 10,
  //   textAlign: "center"
  // },
  // openingText: {
  //   textAlign: "center"
  // }
});

export default AutocompleteExample;
