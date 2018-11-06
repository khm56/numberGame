import React, { Component } from "react";
import "./App.css";

class Success extends Component {
  render() {
    return (
      <div>
        <img
          src="https://cdn.gamerant.com/wp-content/uploads/overwatch-mercy-3.jpg.optimal.jpg"
          className=" border rounded-circle"
          style={{ width: "300px", height: "200px" }}
          alt="logo"
        />
        <h1 className="instructions">
          {" "}
          Mercy is looking over you and your family... You may always be safe
        </h1>
        <h2> I'm taking care of you. - Mercy</h2>
      </div>
    );
  }
}
export default Success;
