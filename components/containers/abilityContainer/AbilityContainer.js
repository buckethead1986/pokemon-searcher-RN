import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class AbilityContainer extends Component {
  render() {
    return (
      <Text>
        Hey, {this.props.shownType ? this.props.shownType.type : "not here yet"}
      </Text>
    );
  }
}

const styles = StyleSheet.create({});

export default AbilityContainer;
