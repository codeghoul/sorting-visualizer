import React, { Component } from "react";
import "./App.css";
import SortingVisualizer from "./containers/SortingVisualizer/SortingVisualizer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SortingVisualizer />
      </div>
    );
  }
}

export default App;
