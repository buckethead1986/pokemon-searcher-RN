import React, { Component } from "react";
import { AppRegistry, TextInput } from "react-native";

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Enter pokemon" };
  }

  render() {
    return (
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={text => this.setState({ text })}
        clearTextOnFocus={true}
        onSubmitEditing={text => this.props.fetchPokemon()}
        value={this.state.text}
      />
    );
  }
}
