import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Grid, Row, Col } from "react-native-easy-grid";
import { capitalize } from "../helperMethods/HelperMethods";
import styles from "../styles/Styles";

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
              <Text style={styles.buttonText}>{capitalizedType} Pokemom</Text>
            </TouchableOpacity>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default NavigationButton;
