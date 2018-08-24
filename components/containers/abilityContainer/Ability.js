import React, { Component } from "react";
import { View, Text } from "react-native";
import { typeData } from "../../constants/Constants";
import TypeButton from "../../buttons/TypeButton";

class Ability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ability: {}
    };
  }

  componentDidMount() {
    fetch(`${this.props.ability.url}`)
      .then(res => res.json())
      .then(json => this.setState({ ability: json }));
  }

  render() {
    return (
      <View
        style={{
          borderWidth: 1.0,
          borderColor: "black"
        }}
      >
        <TypeButton
          type={this.props.ability.name}
          value={typeData[this.props.shownType.name][1]}
          style={{ backgroundColor: typeData[this.props.shownType.name][2] }}
          onPress={() => this.props.changeSwipePage(1)}
          isDisabled={false}
        />
        {Object.keys(this.state.ability).size !== 0 ? (
          <Text>{this.state.ability.accuracy}</Text>
        ) : (
          ""
        )}
        <Text>{this.props.shownType.id}</Text>
        <Text>{typeData[this.props.shownType.name][2]}</Text>
        <Text>{this.props.shownType.generation.name}</Text>
        <Text>{this.props.shownType.moves[1].name}</Text>
        <Text>{this.props.shownType.moves[4].name}</Text>
      </View>
    );
  }
}

export default Ability;
