import React, { Component } from "react";
import { Text } from "react-native";

class TitleText extends Component {
  render() {
    return (
      <Text style={{ fontSize: 48, color: "white" }}>{this.props.label}</Text>
    );
  }
}

export default TitleText;
