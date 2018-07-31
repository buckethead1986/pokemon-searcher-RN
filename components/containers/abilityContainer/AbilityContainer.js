import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Ability from "./Ability";

class AbilityContainer extends Component {
  state = { display: {} };

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/type/1`)
      .then(res => res.json())
      .then(json => this.setState({ display: json }));
  }
  render() {
    return (
      <View>
        {Object.keys(this.props.shownType).length !== 0 ? (
          <Ability url={this.props.url} shownType={this.props.shownType} />
        ) : (
          <Text>Hmm, things seems to be a bit weird</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default AbilityContainer;
