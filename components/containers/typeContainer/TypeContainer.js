import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import GridOfTypeButtonsContainer from "./gridOfTypeButtonsContainer/GridOfTypeButtonsContainer";
import DamageRatiosContainer from "./damageRatiosContainer/DamageRatiosContainer";
import TypeButton from "../../buttons/TypeButton";
import NavigationButton from "../../buttons/NavigationButton";
import { allTypes } from "../../constants/Constants";
import { capitalize } from "../../helperMethods/HelperMethods";

class TypeContainer extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.centerView}>
          <Text style={styles.pageHeaderText}>Damage Relations by Type</Text>
        </View>
        <ScrollView>
          <GridOfTypeButtonsContainer
            data={allTypes}
            changeShownType={this.props.changeShownType}
          />
          {this.props.shownType.name ? (
            <NavigationButton
              index={1}
              style={{
                backgroundColor: this.props.shownType.backgroundColor
              }}
              shownType={this.props.shownType}
              changeSwipePage={this.props.changeSwipePage}
              isDisabled={false}
            />
          ) : (
            ""
          )}

          {Object.keys(this.props.shownType).length !== 0 ? (
            <DamageRatiosContainer
              shownType={this.props.shownType}
              changeShownType={this.props.changeShownType}
            />
          ) : (
            <Text>Hmm, things seems to be a bit slow</Text>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerView: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  pageHeaderText: {
    fontSize: 20,
    color: "black"
  }
});

export default TypeContainer;
