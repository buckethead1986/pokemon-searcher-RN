import React, { Component } from "react";
import { StyleSheet } from "react-native";

//I decided to consolidate all style in one file rather than creating a smaller StyleSheet for each individual component. This was mostly aesthetic,
//however a few styles are used across multiple components
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  },
  centerView: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  pageHeaderText: {
    fontSize: 20,
    color: "black"
  },
  button: {
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    margin: 4
  },
  spriteImageButton: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5
  },
  navigationButton: {
    margin: 10,
    marginTop: 30,
    marginBottom: 20
  },
  buttonText: {
    fontSize: 18,
    color: "white"
  },
  nothingButtonBorder: {
    borderWidth: 1.0,
    borderColor: "black"
  },
  nothingButtonText: {
    color: "black"
  },
  damageRatioView: {
    margin: 5
  },
  damageRatioHeader: {
    fontSize: 20,
    marginBottom: 5
  },
  autocompleteContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  itemText: {
    fontSize: 15,
    margin: 10,
    marginLeft: 10,
    marginRight: 10
  },
  shownTypeButton: {
    margin: 30,
    marginLeft: 50,
    marginRight: 50
  },
  pokeCardView: {
    justifyContent: "center",
    alignItems: "center"
  },
  pokeCardImage: {
    width: 300,
    height: 300
  }
});
