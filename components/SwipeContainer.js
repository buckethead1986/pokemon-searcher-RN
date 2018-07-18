import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import AutoCompleteSearchBar from "./AutoCompleteSearchBar";
import TypeContainer from "./TypeContainer";
import TitleText from "./TitleText";

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
        showsPagination={true}
        index={1}
        keyboardShouldPersistTaps="always"
      >
        <View style={styles.container} keyboardShouldPersistTaps="always">
          <AutoCompleteSearchBar url={this.props.url} />
        </View>

        <View style={styles.container}>
          <TypeContainer url={this.props.url} />
        </View>

        <View style={this.viewStyle()}>
          <TitleText label="damage chart" />
        </View>
      </Swiper>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  }
});

export default Home;
