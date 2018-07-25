import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Grid, Row, Col } from "react-native-easy-grid";
import Icon from "react-native-vector-icons/Foundation";

//renders 4 buttons, for default, female, shiny default, and shiny female sprite images. Sometimes, the default form IS female (ex: Nidoqueen)
//and going through and manually updating results for female only pokemon is a stretch goal.
//Distributing the logic for whether or not to be disabled/have a callback function/be colored into a 'createSpriteIcon'
//function ended up being more complex and less readable than these 4 Icon components.
class SpriteButtons extends Component {
  render() {
    return (
      <Grid>
        <Row style={{ height: 30 }}>
          <Icon
            name="male-symbol"
            size={25}
            style={styles.spriteImageButton}
            onPress={() => this.props.changeImage("front_default")}
          />
          <Icon
            name="female-symbol"
            size={25}
            style={styles.spriteImageButton}
            color={
              this.props.displayPokemon.sprites.front_female !== null
                ? "black"
                : "grey"
            }
            onPress={() =>
              this.props.displayPokemon.sprites.front_female !== null
                ? this.props.changeImage("front_female")
                : ""}
          />
          <Icon
            name="male-symbol"
            size={25}
            color="purple"
            style={styles.spriteImageButton}
            onPress={() => this.props.changeImage("front_shiny")}
          />
          <Icon
            name="female-symbol"
            size={25}
            style={styles.spriteImageButton}
            color={
              this.props.displayPokemon.sprites.front_shiny_female !== null
                ? "purple"
                : "grey"
            }
            onPress={() =>
              this.props.displayPokemon.sprites.front_shiny_female !== null
                ? this.props.changeImage("front_shiny_female")
                : ""}
          />
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  spriteImageButton: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10
  }
});

export default SpriteButtons;
