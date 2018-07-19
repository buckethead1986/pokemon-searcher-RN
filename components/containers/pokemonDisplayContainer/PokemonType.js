import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Grid, Row, Col } from "react-native-easy-grid";
import { typeData } from "../../constants/Constants";
import TypeButton from "../typeContainer/gridOfTypeButtonsContainer/TypeButton";
import styles from "../../styles/Styles";

class PokemonType extends Component {
  renderButton = ([type, value, backgroundColor], isDisabled) => {
    return (
      <TypeButton
        type={type}
        value={value}
        style={{ backgroundColor: backgroundColor }}
        onPress={this.props.onPress}
        isDisabled={isDisabled}
      />
    );
  };

  isSingleOrDoubleType = singleOrDouble => {
    if (singleOrDouble === 2) {
      return (
        <Row style={{ height: 50 }}>
          <Col />
          <Col>
            {this.renderButton(typeData[this.props.types[0].type.name], false)}
          </Col>
          <Col>
            {this.renderButton(typeData[this.props.types[1].type.name], false)}
          </Col>
          <Col />
        </Row>
      );
    } else {
      return (
        <Row style={{ height: 50 }}>
          <Col size={75} />
          <Col size={50}>
            {this.renderButton(typeData[this.props.types[0].type.name], false)}
          </Col>
          <Col size={75} />
        </Row>
      );
    }
  };

  render() {
    return <Grid>{this.isSingleOrDoubleType(this.props.types.length)}</Grid>;
  }
}

export default PokemonType;
