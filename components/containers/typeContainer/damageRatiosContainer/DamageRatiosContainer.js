import React, { Component } from "react";
import { View, Text } from "react-native";
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
      <View style={{ marginBottom: 30 }}>{this.renderDamageRatioView()}</View>
    );
  }
}

export default DamageRatiosContainer;
