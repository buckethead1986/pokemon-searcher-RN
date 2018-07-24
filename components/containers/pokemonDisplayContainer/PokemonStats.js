import React, { Component } from "react";
import { View, Text } from "react-native";
import { Grid, Row, Col } from "react-native-easy-grid";
import styles from "../../styles/Styles";

// import Icon from "react-native-vector-icons/FontAwesome";

class PokemonStats extends Component {
  createStatRow = stat => {
    return (
      <Row>
        <Col
          style={{
            paddingLeft: 20,
            borderWidth: 1.0,
            borderColor: "black"
          }}
        >
          <Text style={styles.damageRatioHeader}>{`${stat}`}: </Text>
        </Col>
        <Col
          style={{
            paddingLeft: 20,
            borderWidth: 1.0,
            borderColor: "black"
          }}
        >
          <Text style={styles.damageRatioHeader}>
            {this.props.displayPokemon[stat]}
          </Text>
        </Col>
      </Row>
    );
  };

  render() {
    return (
      <Grid>
        <Text style={styles.damageRatioHeader}> Base Stats </Text>
        {this.createStatRow("name")}
        {this.createStatRow("weight")}
        {this.createStatRow(this.props.displayPokemon.stats[0].base_stat)}
        {this.createStatRow("id")}
        {this.createStatRow("id")}

        <Row>
          <Col>
            <Text>name: </Text>
          </Col>
          <Col>
            <Text>{this.props.displayPokemon["name"]}</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text>Name: {this.props.displayPokemon.name}</Text>
          </Col>
          <Col>
            <Text>Weight: {this.props.displayPokemon.weight}</Text>
          </Col>
        </Row>
        <Text>Pokedex Number: {this.props.displayPokemon.id}</Text>
        <Text>Speed: {this.props.displayPokemon.stats[0].base_stat}</Text>
        <Text>
          Special Defense: {this.props.displayPokemon.stats[1].base_stat}
        </Text>
        <Text>
          Special Attack: {this.props.displayPokemon.stats[2].base_stat}
        </Text>
        <Text>Defense: {this.props.displayPokemon.stats[3].base_stat}</Text>
        <Text>Attack: {this.props.displayPokemon.stats[4].base_stat}</Text>
        <Text>Hp: {this.props.displayPokemon.stats[5].base_stat}</Text>
      </Grid>
    );
  }
}
export default PokemonStats;
