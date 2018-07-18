import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class TypeDamageRatio extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          {this.props.data.name} types take double damage from:
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default TypeDamageRatio;
