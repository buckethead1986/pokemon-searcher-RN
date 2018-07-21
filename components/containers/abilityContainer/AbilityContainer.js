import React, { Component } from "react";
import { View, Text } from "react-native";

class AbilityContainer extends Component {
  render() {
    return (
      <Text>
        Hey, {this.props.shownType ? this.props.shownType.type : "not here yet"}
      </Text>
    );
  }
}

export default AbilityContainer;
