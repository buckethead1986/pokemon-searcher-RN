import React, { Component } from "react";
import { Text, View } from "react-native";
import Swiper from "react-native-swiper";
import PokemonDisplayContainer from "../pokemonDisplayContainer/PokemonDisplayContainer";
import TypeContainer from "../typeContainer/TypeContainer";
import TitleText from "../../TitleText";
import styles from "../../styles/Styles";

class SwipeContainer extends Component {
  state = {};
  viewStyle() {
    return {
      flex: 1,
      backgroundColor: "blue",
      justifyContent: "center",
      alignItems: "center"
    };
  }

  //autoscrolls to typeContainer page when type button is clicked on PokemonDisplayContainer page, and updates shownType to the type selected.
  onPress = (type, value, backgroundColor) => {
    this.setState({ shownType: type }, () => this.swiper.scrollBy(1));
  };

  render() {
    return (
      <Swiper
        loop={false}
        showsPagination={true}
        index={1}
        keyboardShouldPersistTaps="always"
        ref={component => (this.swiper = component)}
      >
        <View style={styles.container} keyboardShouldPersistTaps="always">
          <PokemonDisplayContainer
            url={this.props.url}
            onPress={this.onPress}
          />
        </View>

        <View style={styles.container}>
          <TypeContainer
            url={this.props.url}
            shownType={this.state.shownType}
          />
        </View>

        <View style={this.viewStyle()}>
          <TitleText label="damage chart" />
        </View>
      </Swiper>
    );
  }
}

export default SwipeContainer;
