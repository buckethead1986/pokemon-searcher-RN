import React, { Component } from "react";
import { ScrollView, View, Picker, StyleSheet, Text } from "react-native";
import CreateDynamicButtons from "./CreateDynamicButtons";
import DamageRatiosContainer from "./DamageRatiosContainer";
import { typeButtons } from "./Constants";

import Button from "./Button";

class TypeContainer extends Component {
  state = {
    shownType: {},
    allTypeData: {}
  };

  onPress = type => {
    this.checkForTypeDataBeforePingingAPI(type);
  };

  componentDidMount() {
    this.fetchData({
      value: 1,
      backgroundColor: "#A8A877"
    });
  }

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
        <View style={styles.textView}>
          <Text style={styles.text}>Damage Relations by Type</Text>
        </View>
        <CreateDynamicButtons data={typeButtons} onPress={this.onPress} />
        <Button
          type={this.state.shownType.name}
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

var styles = StyleSheet.create({
  textView: {
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    color: "black"
  }
});

export default TypeContainer;
