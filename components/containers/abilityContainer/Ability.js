import React, { Component } from "react";
import { View, Text } from "react-native";

class Ability extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.shownType.name}</Text>
      </View>
    );
  }
}

export default Ability;
