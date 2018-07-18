import React from "react";
import SwipeContainer from "./components/SwipeContainer";

const url = "https://pokeapi.co/api/v2";

export default class App extends React.Component {
  render() {
    return <SwipeContainer url={url} />;
  }
}
