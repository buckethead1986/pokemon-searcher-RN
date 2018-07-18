import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import Button from "./Button";
import { typeData } from "./Constants";

// const typeData = {
//   normal: ["Normal", 1, "#A8A877"],
//   fighting: ["Fighting", 2, "#C03029"],
//   flying: ["Flying", 3, "#A790F0"],
//   poison: ["Poison", 4, "#9F3F9F"],
//   ground: ["Ground", 5, "#E0C067"],
//   rock: ["Rock", 6, "#B9A037"],
//   bug: ["Bug", 7, "#A8B820"],
//   ghost: ["Ghost", 8, "#6F5798"],
//   steel: ["Steel", 9, "#B8B8D0"],
//   fire: ["Fire", 10, "#F08031"],
//   water: ["Water", 11, "#6890F0"],
//   grass: ["Grass", 12, "#78C84F"],
//   electric: ["Electric", 13, "#F8D030"],
//   psychic: ["Psychic", 14, "#F85887"],
//   ice: ["Ice", 15, "#97D8D8"],
//   dragon: ["Dragon", 16, "#7039F8"],
//   dark: ["Dark", 17, "#6F5748"],
//   fairy: ["Fairy", 18, "#F0B6BC"]
// };

class CreateButton extends Component {
  createButtonGrid = data => {
    let result = [];
    if (data.length === 0) {
      return this.renderNothingButton();
    } else {
      for (let i = 0; i < data.length; i += 4) {
        result.push(
          this.createButtonRow(
            i,
            data[i],
            data[i + 1],
            data[i + 2],
            data[i + 3]
          )
        );
      }
    }
    return result;
  };

  createButtonRow = (
    i,
    first,
    second = "blank",
    third = "blank",
    fourth = "blank"
  ) => {
    return (
      <Row key={`${i}-${this.props.data[2]}`} style={{ height: 50 }}>
        {this.isButtonOrBlank(first)}
        {this.isButtonOrBlank(second)}
        {this.isButtonOrBlank(third)}
        {this.isButtonOrBlank(fourth)}
      </Row>
    );
  };

  isButtonOrBlank = type => {
    if (type === "blank") {
      return <Col />;
    } else {
      return <Col>{this.renderButton(typeData[type], this.props.data[1])}</Col>;
    }
  };

  renderButton = ([type, value, backgroundColor], isDisabled) => {
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

  renderNothingButton = () => {
    return (
      <Row key={`${this.props.data[2]}`} style={{ height: 50 }}>
        <Col>
          <TouchableOpacity style={styles.button} disabled={true}>
            <Text style={styles.text}>Nothing</Text>
          </TouchableOpacity>
        </Col>
        <Col />
        <Col />
        <Col />
      </Row>
    );
  };

  render() {
    return <Grid>{this.createButtonGrid(this.props.data[0])}</Grid>;
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1.0,
    borderColor: "black",
    padding: 10,
    margin: 4
  },
  text: {
    fontSize: 18
  }
});

export default CreateButton;
