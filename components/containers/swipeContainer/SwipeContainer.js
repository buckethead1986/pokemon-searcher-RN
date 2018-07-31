import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import PokemonDisplayContainer from "../pokemonDisplayContainer/PokemonDisplayContainer";
import TypeContainer from "../typeContainer/TypeContainer";
import AbilityContainer from "../abilityContainer/AbilityContainer";
import PokemonByTypeContainer from "../pokemonByTypeContainer/PokemonByTypeContainer";
import TitleText from "../../TitleText";

class SwipeContainer extends Component {
  //autoscrolls to typeContainer page when type button is clicked on PokemonDisplayContainer page, and updates shownType to the type selected.
  changeShownType = (type, value, backgroundColor) => {
    this.props.changeShownType(type);
    this.changeSwipePage(1);
  };

  changeSwipePage = value => {
    this.swiper.scrollBy(value);
  };

  //this,.props.shownType works fine in TypeCOntainer, but breaks in AbilityContainer, and I don't know why. Console.logs show the data coming through,
  //but I get 'undefined is not an object' errors when I try to access it. re-fetching the data in AbilityContainer works fine, but defeats the purpose of props.
  render() {
    return (
      <Swiper
        loop={true}
        showsPagination={true}
        index={1}
        keyboardShouldPersistTaps="always"
        ref={component => (this.swiper = component)}
      >
        <View style={styles.container} keyboardShouldPersistTaps="always">
          <PokemonDisplayContainer
            url={this.props.url}
            changeShownType={this.changeShownType}
          />
        </View>

        <View style={styles.container}>
          <TypeContainer
            url={this.props.url}
            shownType={this.props.shownType}
            changeShownType={this.props.changeShownType}
            changeSwipePage={this.changeSwipePage}
            checkForTypeDataBeforePingingAPI={
              this.props.checkForTypeDataBeforePingingAPI
            }
          />
        </View>

        <View style={styles.container}>
          <AbilityContainer
            url={this.props.url}
            shownType={this.props.shownType}
          />
        </View>
        <View style={styles.container}>
          <PokemonByTypeContainer url={this.props.url} />
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  }
});

export default SwipeContainer;
