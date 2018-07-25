import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import TypeButton from "../../../buttons/TypeButton";
import { typeData } from "../../../constants/Constants";

//dynamic code to create a grid of 4 columns of TouchableOpacity buttons. Hardcoding this is much quicker,
//but this is DRYer for reuse in DamageRatios and TypeContainer.
//This will render an indetermiinate number of buttons into rows of 4 columns each, with a 'Nothing' button
//created for damage ratios with no results.
//I am unaware of a React method that exists to accomplish this (Do tell if you know of one!) (Flexbox didn't render a nice grid like I wanted)
class GridOfTypeButtonsContainer extends Component {
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
      <TypeButton
        type={type}
        value={value}
        style={{ backgroundColor: backgroundColor }}
        onPress={this.props.changeShownType}
        isDisabled={isDisabled}
      />
    );
  };

  renderNothingButton = () => {
    return (
      <Row key={`${this.props.data[2]}`} style={{ height: 50 }}>
        <Col>
          <TouchableOpacity
            style={[styles.button, styles.nothingButtonBorder]}
            disabled={true}
          >
            <Text style={[styles.buttonText, styles.nothingButtonText]}>
              Nothing
            </Text>
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
    padding: 10,
    margin: 4
  },
  buttonText: {
    fontSize: 18,
    color: "white"
  },
  nothingButtonBorder: {
    borderWidth: 1.0,
    borderColor: "black"
  },
  nothingButtonText: {
    color: "black"
  }
});

export default GridOfTypeButtonsContainer;
