import React, { Component } from "react";
import { View, Text } from "react-native";
import GridOfTypeButtonsContainer from "../gridOfTypeButtonsContainer/GridOfTypeButtonsContainer";
import { capitalize } from "../../../helperMethods/HelperMethods";
import styles from "../../../styles/Styles";

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
          onPress={this.props.onPress}
        />
      </View>
    );
  }
}

export default DamageRatio;
