import React, { Component } from "react";
import AddBar from "../containers/AddBar";
import TodoList from "../containers/TodoList";

export default class App extends Component {
  render() {
    return (
      <div>
        <AddBar />
        <TodoList />
      </div>
    );
  }
}
