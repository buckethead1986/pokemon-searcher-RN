import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import GridOfTypeButtonsContainer from "../gridOfTypeButtonsContainer/GridOfTypeButtonsContainer";
import { capitalize } from "../../../helperMethods/HelperMethods";

class DamageRatio extends Component {
  renderDamageRatios = damageRatio => {
    let data = this.props.shownType.damage_relations[damageRatio].map(type => {
      return type.name;
    });
    return [data, false, damageRatio];
  };

  renderTextAsToOrFrom = () => {
    let splitText = this.props.type.split("_");
    if (splitText[splitText.length - 1] === "to") {
      return (
        `${capitalize(this.props.shownType.name)}` +
        " deals " +
        splitText.join(" ")
      );
    } else {
      return (
        `${capitalize(this.props.shownType.name)}` +
        " takes " +
        splitText.join(" ")
      );
    }
  };

  render() {
    return (
      <View style={styles.damageRatioView}>
        <Text style={styles.damageRatioHeader}>
          {this.renderTextAsToOrFrom()}
        </Text>
        <GridOfTypeButtonsContainer
          data={this.renderDamageRatios(this.props.type)}
          changeShownType={this.props.changeShownType}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  damageRatioView: {
    margin: 5
  },
  damageRatioHeader: {
    fontSize: 20,
    marginBottom: 5
  }
});

export default DamageRatio;
