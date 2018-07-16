import React, { Component } from "react";
import { ScrollView, View, Picker, StyleSheet, Text } from "react-native";
import CreateButtons from "./CreateButtons";

import Button from "./Button";

class TypeContainer extends Component {
  state = {
    shownType: { type: "Normal", backgroundColor: "#A8A877" }
  };

  onPress = type => {
    this.setState({ shownType: type });
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.textView}>
          <Text style={styles.text}>Select a Type</Text>
        </View>
        <CreateButtons onPress={this.onPress} />

        <Button
          type={this.state.shownType.type}
          style={{ backgroundColor: this.state.shownType.backgroundColor }}
          isDisabled={true}
        />
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  textView: {
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    color: "black"
  }
});

export default TypeContainer;
