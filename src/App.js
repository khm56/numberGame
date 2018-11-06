import React, { Component } from "react";
import "./App.css";
import Fail from "./Fail";
import Success from "./Success";
import Instructions from "./Instructions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      hints: [],
      guess: 101,
      guessesLeft: 5,
      hintb: false,
      guessb: false,
      messege: ""
    };
    this.generateNumber = this.generateNumber.bind(this);
    this.generateHints = this.generateHints.bind(this);
    this.checkGuess = this.checkGuess.bind(this);
  }

  generateNumber() {
    var RandomNumber = Math.floor(Math.random() * 100) + 1;
    this.setState({ number: RandomNumber });
    console.log(this.state.number);
  }

  generateHints() {
    let counter = 5;
    let tempHints = [];
    let randomIndex = Math.floor(Math.random() * 5) + 1;

    while (counter > 0) {
      if (counter === randomIndex) {
        tempHints.push(this.state.number);
        counter--;
      } else {
        var RandomNumber = Math.floor(Math.random() * 100) + 1;
        if (RandomNumber === this.state.number) {
          counter = counter + 0;
        } else {
          tempHints.push(RandomNumber);
          counter--;
        }
      }
    }
    this.setState({ hints: tempHints });
    this.setState({ hintb: true });
    console.log(this.state.number);
    console.log(this.state.hints);
  }

  checkGuess() {
    this.setState({ hintb: false });
    let query = +this.state.guess;
    if (query === this.state.number) {
      this.setState({ guessb: true });
    } else {
      this.setState({ guessesLeft: this.state.guessesLeft - 1 });
      this.setState({ guessb: false });
      if (query < this.state.number - 10 || query > this.state.number + 10) {
        this.setState({ messege: "You are far from being safe" });
      } else {
        this.setState({ messege: "You are close, use the hints" });
      }
    }
  }

  componentDidMount() {
    this.generateNumber();
  }

  render() {
    let hintnum = this.state.hints.map(hint => (
      <div className=" border rounded-circle ml-2"> {hint} </div>
    ));

    var video = document.getElementById("myVideo");
    return (
      <div className="App">
        <header className="App-header">
          <div className="row">
            {this.state.guessesLeft === 0 ? (
              <Fail />
            ) : this.state.guessb ? (
              <Success />
            ) : (
              <div>
                <Instructions />
                <h2>{this.state.messege}</h2>
              </div>
            )}
          </div>
          <div className="row">
            <input
              className="form-control bg-dark"
              style={{ color: "white" }}
              type="text"
              onChange={event => this.setState({ guess: event.target.value })}
            />
          </div>
          <div className="row">
            <h4>You have {this.state.guessesLeft} attempts left</h4>
          </div>
          <div className="row">{this.state.hintb ? hintnum : <div />}</div>
          <div className="row">
            {this.state.guessesLeft === 0 || this.state.guessb ? (
              <div className="col">
                <button
                  className="btn btn-info"
                  onClick={() => document.location.reload()}
                >
                  Try Again
                </button>
              </div>
            ) : (
              <div className="col">
                <button className="btn btn-primary" onClick={this.checkGuess}>
                  Submit
                </button>
                <button
                  className="btn btn-warning"
                  onClick={this.generateHints}
                >
                  Hints
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => document.location.reload()}
                >
                  GiveUp
                </button>
              </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
