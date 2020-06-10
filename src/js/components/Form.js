import React, { Component } from "react";
import ReactDOM from "react-dom";
import Home from "./Home";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
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
        <Home></Home>
      </div>

    );
  }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;