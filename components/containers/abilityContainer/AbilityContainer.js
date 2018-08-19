import React, { Component } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import Ability from "./Ability";

class AbilityContainer extends Component {
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
          this.createMoveSet()
        ) : (
          <Text>Hmm, slow internet today</Text>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});

export default AbilityContainer;
