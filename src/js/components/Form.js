import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import TodoList from "./TodoList";
import Footer from './Fotter';

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
      <div >
        <Header />
        <TodoList />
        <Footer />
      </div>
    );
  }
}
export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;