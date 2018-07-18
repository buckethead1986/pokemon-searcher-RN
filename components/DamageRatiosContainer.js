import React, { Component } from "react";
import { View, Text } from "react-native";
import CreateDynamicButtons from "./CreateDynamicButtons";
import DamageRatio from "./DamageRatio";
import { ratios } from "./Constants";

//the api had the damage rations in a weird order (half damage from, no damage from, half damage to, double damage from, no damage to, double damage to),
// so I manually ordered them as made sense to me. (from: double, half, none. to: double half none)
// let ratios = [
//   "double_damage_from",
//   "half_damage_from",
//   "no_damage_from",
//   "double_damage_to",
//   "half_damage_to",
//   "no_damage_to"
// ];

class DamageRatiosContainer extends Component {
  // renderDamageRatios = damageRatio => {
  //   let data = this.props.shownType.damage_relations[damageRatio].map(type => {
  //     return type.name;
  //   });
  //   return [data, false, damageRatio];
  // };
  //
  // capitalize = name => {
  //   return name.charAt(0).toUpperCase() + name.substr(1);
  // };

  renderDamageRatioView = index => {
    let result = [];
    for (var i = 0; i < ratios.length; i++) {
      result.push(
        <DamageRatio
          key={`${ratios[i]}`}
          type={ratios[i]}
          shownType={this.props.shownType}
          onPress={this.props.onPress}
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
