import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";

class Fail extends Component {
  render() {
    return (
      <div>
        <img
          src="https://c1.staticflickr.com/2/1391/542962058_ee0f4313a1.jpg"
          className=" border rounded-circle"
          alt="logo"
        />
        <h2 className="instructions">
          {" "}
          YOU LOST, HURRY!! TRY AGAIN IF YOU WISH TO RESCUE YOUR FAMILY
        </h2>
        <h2>
          {" "}
          "Voldemort is my past, present, and future" are you sure this is what
          you want to say?
        </h2>
      </div>
    );
  }
}
export default Fail;
