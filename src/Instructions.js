import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";

class Instructions extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className="instructions">Guess a number</h1>
          <h1 className="instructions">1-100</h1>
          <h1 className="instructions">to rescue your Parents</h1>
          <h2 className="instructions">
            If you get it correct an angel will watch over your family forever
          </h2>
          <h2 className="instructionsc">
            If you dont the curse of the Dark Wizard will haunt your parents!
          </h2>
          <h2 />
        </div>
      </div>
    );
  }
}
export default Instructions;
