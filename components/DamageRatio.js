import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import CreateDynamicButtons from "./CreateDynamicButtons";

class DamageRatio extends Component {
  renderDamageRatios = damageRatio => {
    let data = this.props.shownType.damage_relations[damageRatio].map(type => {
      return type.name;
    });
    return [data, false, damageRatio];
  };

  capitalize = name => {
    return name.charAt(0).toUpperCase() + name.substr(1);
  };

  renderTextAsToOrFrom = () => {
    let splitText = this.props.type.split("_");
    if (splitText[splitText.length - 1] === "to") {
      return (
        `${this.capitalize(this.props.shownType.name)}` +
        " deals " +
        splitText.join(" ")
      );
    } else {
      return (
        `${this.capitalize(this.props.shownType.name)}` +
        " takes " +
        splitText.join(" ")
      );
    }
  };

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>{this.renderTextAsToOrFrom()}</Text>
        <CreateDynamicButtons
          data={this.renderDamageRatios(this.props.type)}
          onPress={this.props.onPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginBottom: 5
  },
  view: {
    margin: 5
  }
});

export default DamageRatio;
