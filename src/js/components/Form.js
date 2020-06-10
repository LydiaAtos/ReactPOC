import React, { Component } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import UserInput from "./UserInput";
import ArrangePuzzle from "./ArrangePuzzle";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: "number"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
    <div>
        <ArrangePuzzle puzzleType={this.state.value}/>

        <br/>
        <br/>
      <p>State Value is {this.state.value}</p>

        <button value = "test" onClick={this.handleChange}>Alpha</button>
        <button value = "number" onClick={this.handleChange}>Number</button>
    </div>
    );
  }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;