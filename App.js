import React from "react";
import DataContainer from "./components/containers/dataContainer/DataContainer";

const url = "https://pokeapi.co/api/v2";

export default class App extends React.Component {
  render() {
    return <DataContainer url={url} />;
  }
}
