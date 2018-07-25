import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import SpriteButtons from "./SpriteButtons";
import { capitalize } from "../../helperMethods/HelperMethods";

class ImageContainer extends Component {
  state = { image: this.props.displayPokemon.sprites.front_default };

  componentWillReceiveProps(nextProps) {
    if (nextProps.displayPokemon !== this.props.displayPokemon) {
      this.setState({ image: nextProps.displayPokemon.sprites.front_default });
    }
  }

  changeImage = type => {
    this.setState({
      image: this.props.displayPokemon.sprites[type]
    });
  };

  render() {
    return (
      <View style={styles.pokeCardView}>
        <Image
          style={styles.pokeCardImage}
          source={{ uri: this.state.image }}
        />
        <Text style={styles.header}>
          {capitalize(this.props.displayPokemon.name)}
        </Text>
        <SpriteButtons
          changeImage={this.changeImage}
          displayPokemon={this.props.displayPokemon}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pokeCardView: {
    justifyContent: "center",
    alignItems: "center"
  },
  pokeCardImage: {
    width: 250,
    height: 250,
    paddingBottom: 0
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    margin: 20
  }
});

export default ImageContainer;
