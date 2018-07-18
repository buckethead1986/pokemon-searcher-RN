import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

class CreateButton extends Component {
  render() {
    const { style } = this.props;
    return (
      <TouchableOpacity
        style={[styles.button, style]}
        onPress={() =>
          this.props.onPress({
            type: this.props.type,
            value: this.props.value,
            backgroundColor: this.props.style.backgroundColor
          })}
        disabled={this.props.isDisabled}
      >
        <Text style={styles.text}> {this.props.type} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    margin: 4
  },
  text: {
    fontSize: 18,
    color: "white"
  }
});
export default CreateButton;
