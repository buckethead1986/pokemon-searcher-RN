import React, { Component } from "react";
import { View } from "react-native";
import SwipeContainer from "../swipeContainer/SwipeContainer";

//I decided against using redux, rather to place data in a parent component, and pass props around.
//Time will tell if that was a bad idea, but hey, it's my first react native project :D
class DataContainer extends Component {
  state = {
    shownType: {},
    shownAbility: {},
    allTypeData: {},
    allAbilityData: {}
  };

  componentDidMount() {
    this.fetchData({
      value: 1,
      backgroundColor: "#A8A877"
    });
  }

  changeShownType = type => {
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
    return this.state.shownType.length !== 0 ? (
      <SwipeContainer
        url={this.props.url}
        shownType={this.state.shownType}
        changeShownType={this.changeShownType}
        checkForTypeDataBeforePingingAPI={this.checkForTypeDataBeforePingingAPI}
      />
    ) : (
      ""
    );
  }
}

export default DataContainer;
