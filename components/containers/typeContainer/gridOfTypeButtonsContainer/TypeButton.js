import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../../../styles/Styles";

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

export default TypeButton;
