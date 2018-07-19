import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import GridOfTypeButtonsContainer from "./gridOfTypeButtonsContainer/GridOfTypeButtonsContainer";
import DamageRatiosContainer from "./damageRatiosContainer/DamageRatiosContainer";
import TypeButton from "./gridOfTypeButtonsContainer/TypeButton";
import { typeButtons } from "../../constants/Constants";
import { capitalize } from "../../helperMethods/HelperMethods";
import styles from "../../styles/Styles";

class TypeContainer extends Component {
  state = {
    shownType: {},
    allTypeData: {}
  };

  componentDidMount() {
    this.fetchData({
      value: 1,
      backgroundColor: "#A8A877"
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.shownType !== this.state.shownType) {
      this.checkForTypeDataBeforePingingAPI(nextProps.shownType);
    }
  }

  onPress = type => {
    this.checkForTypeDataBeforePingingAPI(type);
  };

  //reduces pings to API.  First checks if the data is in state (allTypeData), fetches and stores new data if not
  checkForTypeDataBeforePingingAPI = type => {
    if (type.value in this.state.allTypeData) {
      this.setState({
        shownType: this.state.allTypeData[type.value]
      });
    } else {
      this.fetchData(type);
    }
  };

  fetchData = type => {
    let allTypeDataClone = Object.assign({}, this.state.allTypeData);

    fetch(`${this.props.url}/type/${type.value}`)
      .then(res => res.json())
      .then(json => {
        allTypeDataClone[type.value] = json;
        allTypeDataClone[type.value].backgroundColor = type.backgroundColor;
        this.setState({
          shownType: json,
          allTypeData: allTypeDataClone
        });
      });
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.centerView}>
          <Text style={styles.pageHeaderText}>Damage Relations by Type</Text>
        </View>
        <GridOfTypeButtonsContainer data={typeButtons} onPress={this.onPress} />
        <TypeButton
          type={
            this.state.shownType.name
              ? capitalize(this.state.shownType.name)
              : ""
          }
          style={{
            backgroundColor: this.state.shownType.backgroundColor,
            margin: 30,
            marginLeft: 50,
            marginRight: 50
          }}
          isDisabled={true}
        />
        {Object.keys(this.state.shownType).length !== 0 ? (
          <DamageRatiosContainer
            shownType={this.state.shownType}
            onPress={this.onPress}
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
