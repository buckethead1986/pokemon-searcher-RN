import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import Button from "./Button";

class CreateButton extends Component {
  renderButton = (type, styleColor, isDisabled) => {
    return (
      <Button
        type={type}
        style={{ backgroundColor: styleColor }}
        onPress={this.props.onPress}
        isDisabled={isDisabled}
      />
    );
  };

  render() {
    return (
      <Grid>
        <Row style={{ height: 50 }}>
          <Col>{this.renderButton("Normal", "#A8A877", false)}</Col>
          <Col>{this.renderButton("Fire", "#F08031", false)}</Col>
          <Col>{this.renderButton("Water", "#6890F0", false)}</Col>
          <Col>{this.renderButton("Grass", "#78C84F", false)}</Col>
        </Row>
        <Row style={{ height: 50 }}>
          <Col>{this.renderButton("Electric", "#F8D030", false)}</Col>
          <Col>{this.renderButton("Ice", "#97D8D8", false)}</Col>
          <Col>{this.renderButton("Fighting", "#C03029", false)}</Col>
          <Col>{this.renderButton("Poison", "#9F3F9F", false)}</Col>
        </Row>
        <Row style={{ height: 50 }}>
          <Col>{this.renderButton("Ground", "#E0C067", false)}</Col>
          <Col>{this.renderButton("Flying", "#A790F0", false)}</Col>
          <Col>{this.renderButton("Psychic", "#F85887", false)}</Col>
          <Col>{this.renderButton("Bug", "#A8B820", false)}</Col>
        </Row>
        <Row style={{ height: 50 }}>
          <Col>{this.renderButton("Rock", "#B9A037", false)}</Col>
          <Col>{this.renderButton("Ghost", "#6F5798", false)}</Col>
          <Col>{this.renderButton("Dark", "#6F5748", false)}</Col>
          <Col>{this.renderButton("Dragon", "#7039F8", false)}</Col>
        </Row>
        <Row style={{ height: 50 }}>
          <Col>{this.renderButton("Steel", "#B8B8D0", false)}</Col>
          <Col>{this.renderButton("Fairy", "#F0B6BC", false)}</Col>
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
