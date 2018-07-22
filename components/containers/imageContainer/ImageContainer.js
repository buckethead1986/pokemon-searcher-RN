import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Grid, Row, Col } from "react-native-easy-grid";
import Icon from "react-native-vector-icons/Foundation";
import styles from "../../styles/Styles";

class ImageContainer extends Component {
  state = { image: this.props.displayPokemon.sprites.front_default };

  componentWillReceiveProps(nextProps) {
    if (nextProps.displayPokemon !== this.props.displayPokemon) {
      this.setState({ image: nextProps.displayPokemon.sprites.front_default });
    }
  }

  changeImage = type => {
    this.setState({
      image: this.props.displayPokemon.sprites[type]
    });
  };

  render() {
    return (
      <View style={styles.pokeCardView}>
        <Image
          style={styles.pokeCardImage}
          source={{ uri: this.state.image }}
        />
        <Grid>
          <Row style={{ height: 50 }}>
            <Icon
              name="male-symbol"
              size={50}
              style={styles.spriteImageButton}
              onPress={() => this.changeImage("front_default")}
            />
            <Icon
              name="female-symbol"
              size={50}
              style={styles.spriteImageButton}
              color={
                this.props.displayPokemon.sprites.front_female !== null
                  ? "black"
                  : "grey"
              }
              onPress={() =>
                this.props.displayPokemon.sprites.front_female !== null
                  ? this.changeImage("front_female")
                  : ""}
            />
            <Icon
              name="male-symbol"
              size={50}
              color="purple"
              style={styles.spriteImageButton}
              onPress={() => this.changeImage("front_shiny")}
            />
            <Icon
              name="female-symbol"
              size={50}
              style={styles.spriteImageButton}
              color={
                this.props.displayPokemon.sprites.front_shiny_female !== null
                  ? "purple"
                  : "grey"
              }
              onPress={() =>
                this.props.displayPokemon.sprites.front_shiny_female !== null
                  ? this.changeImage("front_shiny_female")
                  : ""}
            />
          </Row>
        </Grid>
      </View>
    );
  }
}
export default ImageContainer;
