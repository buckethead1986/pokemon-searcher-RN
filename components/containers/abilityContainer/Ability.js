import React, { Component } from "react";
import { View, Text } from "react-native";
import { typeData } from "../../constants/Constants";
import TypeButton from "../../buttons/TypeButton";

class Ability extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.shownType.name}</Text>
        <Text>{this.props.shownType.id}</Text>
        <Text>{typeData[this.props.shownType.name][2]}</Text>
        <Text>{this.props.shownType.generation.name}</Text>
        <Text>{this.props.shownType.moves[1].name}</Text>
        <Text>{this.props.shownType.moves[1].name}</Text>
        <Text>{this.props.shownType.moves[4].name}</Text>
        <TypeButton
          type={this.props.ability.name}
          value={typeData[this.props.shownType.name][1]}
          style={{ backgroundColor: typeData[this.props.shownType.name][2] }}
          onPress={() => this.props.changeSwipePage(1)}
          isDisabled={false}
        />
      </View>
    );
  }
}

export default Ability;
