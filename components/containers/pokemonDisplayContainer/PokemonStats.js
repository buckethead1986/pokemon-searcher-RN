import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Grid, Row, Col } from "react-native-easy-grid";
import { capitalize } from "../../helperMethods/HelperMethods";

class PokemonStats extends Component {
  createStatRow = (statName, value) => {
    return (
      <Row>
        <Col style={styles.statItem}>
          <Text style={styles.damageRatioHeader}>{`${statName}`}</Text>
        </Col>
        <Col style={styles.statItem}>
          <Text style={styles.damageRatioHeader}>
            {this.props.displayPokemon.stats[value].base_stat}
          </Text>
        </Col>
      </Row>
    );
  };

  createNameOrIdRow = (statName, statValue) => {
    return (
      <Row>
        <Col style={styles.statItem}>
          <Text style={styles.damageRatioHeader}>{statName}</Text>
        </Col>
        <Col style={styles.statItem}>
          <Text style={styles.damageRatioHeader}>
            {statValue === "name"
              ? capitalize(this.props.displayPokemon[statValue])
              : this.props.displayPokemon[statValue]}
          </Text>
        </Col>
      </Row>
    );
  };

  createHeightOrWeightRow = (value, unit) => {
    result = this.props.displayPokemon[value].toString();
    if (result.length === 1) {
      result = "0." + result + ` ${unit}`;
    } else {
      result =
        result.substring(0, result.length - 1) +
        "." +
        result.substring(result.length - 1) +
        ` ${unit}`;
    }
    return (
      <Row>
        <Col style={styles.statItem}>
          <Text style={styles.damageRatioHeader}>{capitalize(`${value}`)}</Text>
        </Col>
        <Col style={styles.statItem}>
          <Text style={styles.damageRatioHeader}>{`${result}`}</Text>
        </Col>
      </Row>
    );
  };

  render() {
    return (
      <Grid style={styles.gridStyle}>
        <Text style={styles.header}> Stats </Text>
        {this.createNameOrIdRow("Pokedex ID", "id")}
        {this.createNameOrIdRow("Name", "name")}
        {this.createHeightOrWeightRow("height", "m")}
        {this.createHeightOrWeightRow("weight", "Kg")}
        <Text style={styles.header}> Base IV </Text>
        {this.createStatRow("HP", 5)}
        {this.createStatRow("Speed", 0)}
        {this.createStatRow("Attack", 4)}
        {this.createStatRow("Defense", 3)}
        {this.createStatRow("Special Attack", 2)}
        {this.createStatRow("Special Defense", 1)}
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  damageRatioHeader: {
    fontSize: 20,
    marginBottom: 5
  },
  header: {
    fontSize: 20,
    marginTop: 15,
    marginBottom: 5
  },
  statItem: {
    paddingLeft: 20,
    borderWidth: 1.0,
    borderColor: "black"
  },
  gridStyle: {
    paddingBottom: 10
  }
});

export default PokemonStats;
