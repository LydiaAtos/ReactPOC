import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import TodoList from "./TodoList";
import Footer from './Fotter';
import { createStore } from 'redux'

import Store from "./Store";
import { Provider } from "react-redux";

class Test extends Component {
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
        
        <Provider store={Store}>
          <Header />
          <TodoList />
          <Footer />
        </Provider>
        
      </div>
    );
  }
}
export default Test

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Test />, wrapper) : false;