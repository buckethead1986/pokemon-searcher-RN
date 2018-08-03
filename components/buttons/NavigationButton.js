import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Grid, Row, Col } from "react-native-easy-grid";
import { capitalize } from "../helperMethods/HelperMethods";

class NavigationButton extends Component {
  render() {
    const capitalizedType = capitalize(this.props.shownType.name);
    const { style } = this.props;
    return (
      <Grid>
        <Row>
          <Col>
            <TouchableOpacity
              style={[styles.button, styles.navigationButton, style]}
              onPress={() => this.props.changeSwipePage(1)}
              disabled={this.props.isDisabled}
            >
              <Text style={styles.buttonText}>{capitalizedType} moves</Text>
            </TouchableOpacity>
          </Col>
          <Col>
            <TouchableOpacity
              style={[styles.button, styles.navigationButton, style]}
              onPress={() => this.props.changeSwipePage(2)}
              disabled={this.props.isDisabled}
            >
              <Text style={styles.buttonText}>{capitalizedType} Pokemon</Text>
            </TouchableOpacity>
          </Col>
        </Row>
      </Grid>
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
  navigationButton: {
    margin: 10,
    marginTop: 30,
    marginBottom: 20
  },
  buttonText: {
    fontSize: 17,
    color: "white"
  }
});

export default NavigationButton;
