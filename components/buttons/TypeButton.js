import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

class TypeButton extends Component {
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
        <Text style={styles.buttonText}> {this.props.type} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    paddingLeft: 4,
    paddingRight: 4,
    margin: 4
  },
  buttonText: {
    fontSize: 18,
    color: "white"
  }
});

export default TypeButton;
