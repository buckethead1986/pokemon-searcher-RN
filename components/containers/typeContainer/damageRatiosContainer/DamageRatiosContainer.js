import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import DamageRatio from "./DamageRatio";
import { ratios } from "../../../constants/Constants";

class DamageRatiosContainer extends Component {
  renderDamageRatioView = () => {
    let result = [];
    for (var i = 0; i < ratios.length; i++) {
      result.push(
        <DamageRatio
          key={`${ratios[i]}`}
          type={ratios[i]}
          shownType={this.props.shownType}
          changeShownType={this.props.changeShownType}
        />
      );
    }
    return result;
  };

  render() {
    return (
      <View style={styles.damageRatio}>{this.renderDamageRatioView()}</View>
    );
  }
}

const styles = StyleSheet.create({
  damageRatio: {
    marginBottom: 30
  }
});

export default DamageRatiosContainer;
