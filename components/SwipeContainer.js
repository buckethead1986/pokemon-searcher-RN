import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import PokeAutoComplete from "./PokeAutoComplete";
import TitleText from "./TitleText";
import TypeContainer from "./TypeContainer";

// const { View, Text, StyleSheet } = React;

class Home extends Component {
  viewStyle() {
    return {
      flex: 1,
      backgroundColor: "blue",
      justifyContent: "center",
      alignItems: "center"
    };
  }

  render() {
    return (
      <Swiper
        loop={false}
        showsPagination={false}
        index={1}
        keyboardShouldPersistTaps="always"
      >
        <View style={styles.container} keyboardShouldPersistTaps="always">
          <PokeAutoComplete />
        </View>

        <View style={styles.container}>
          <TypeContainer />
        </View>

        <View style={this.viewStyle()}>
          <TitleText label="damage chart" />
        </View>
      </Swiper>
    );
  }
}

var styles = StyleSheet.create({
  // container: {
  //   flex: 1
  // },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    paddingTop: 50
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "flex-start"
  }
});

export default Home;
