import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import Button from "./Button";

class CreateButton extends Component {
  renderButton = (type, value, backgroundColor, isDisabled) => {
    return (
      <Button
        type={type}
        value={value}
        style={{ backgroundColor: backgroundColor }}
        onPress={this.props.onPress}
        isDisabled={isDisabled}
      />
    );
  };

  render() {
    return (
      <Grid>
        <Row style={{ height: 50 }}>
          <Col>{this.renderButton("Normal", 1, "#A8A877", false)}</Col>
          <Col>{this.renderButton("Fighting", 2, "#C03029", false)}</Col>
          <Col>{this.renderButton("Flying", 3, "#A790F0", false)}</Col>
          <Col>{this.renderButton("Poison", 4, "#9F3F9F", false)}</Col>
        </Row>
        <Row style={{ height: 50 }}>
          <Col>{this.renderButton("Ground", 5, "#E0C067", false)}</Col>
          <Col>{this.renderButton("Rock", 6, "#B9A037", false)}</Col>
          <Col>{this.renderButton("Bug", 7, "#A8B820", false)}</Col>
          <Col>{this.renderButton("Ghost", 8, "#6F5798", false)}</Col>
        </Row>
        <Row style={{ height: 50 }}>
          <Col>{this.renderButton("Steel", 9, "#B8B8D0", false)}</Col>
          <Col>{this.renderButton("Fire", 10, "#F08031", false)}</Col>
          <Col>{this.renderButton("Water", 11, "#6890F0", false)}</Col>
          <Col>{this.renderButton("Grass", 12, "#78C84F", false)}</Col>
        </Row>
        <Row style={{ height: 50 }}>
          <Col>{this.renderButton("Electric", 13, "#F8D030", false)}</Col>
          <Col>{this.renderButton("Psychic", 14, "#F85887", false)}</Col>
          <Col>{this.renderButton("Ice", 15, "#97D8D8", false)}</Col>
          <Col>{this.renderButton("Dragon", 16, "#7039F8", false)}</Col>
        </Row>
        <Row style={{ height: 50 }}>
          <Col>{this.renderButton("Dark", 17, "#6F5748", false)}</Col>
          <Col>{this.renderButton("Fairy", 18, "#F0B6BC", false)}</Col>
          <Col />
          <Col />
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  // button: {
  //   alignItems: "center",
  //   backgroundColor: "red",
  //   padding: 10
  // }
});
export default CreateButton;
