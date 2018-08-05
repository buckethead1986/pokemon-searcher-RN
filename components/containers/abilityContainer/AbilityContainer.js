import React, { Component } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import Ability from "./Ability";

class AbilityContainer extends Component {
  // state = { display: {} };
  //
  // componentDidMount() {
  //   fetch(`https://pokeapi.co/api/v2/type/1`)
  //     .then(res => res.json())
  //     .then(json => this.setState({ display: json }));
  // }

  createMoveSet = () => {
    const abilities = this.props.shownType.moves.map(ability => {
      return (
        <Ability
          key={`${this.props.shownType.name}-${ability.name}`}
          url={this.props.url}
          ability={ability}
          shownType={this.props.shownType}
          changeSwipePage={this.props.changeSwipePage}
        />
      );
    });
    return abilities;
  };

  render() {
    return (
      <ScrollView>
        {Object.keys(this.props.shownType).length !== 0 ? (
          this.createMoveSet()
        ) : (
          <Text>Hmm, things seems to be a bit weird</Text>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});

export default AbilityContainer;
