import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import GridOfTypeButtonsContainer from "./gridOfTypeButtonsContainer/GridOfTypeButtonsContainer";
import DamageRatiosContainer from "./damageRatiosContainer/DamageRatiosContainer";
import TypeButton from "../../buttons/TypeButton";
import NavigationButton from "../../buttons/NavigationButton";
import { allTypes } from "../../constants/Constants";
import { capitalize } from "../../helperMethods/HelperMethods";
import styles from "../../styles/Styles";

class TypeContainer extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.centerView}>
          <Text style={styles.pageHeaderText}>Damage Relations by Type</Text>
        </View>
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
          <Text style={styles.textView}>
            Hmm, things seems to be a bit slow
          </Text>
        )}
      </ScrollView>
    );
  }
}

export default TypeContainer;
