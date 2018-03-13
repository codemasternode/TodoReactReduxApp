import React, { Component } from "react";
import AddBar from "../containers/AddBar";
import TodoList from "../containers/TodoList";
import { Container, Row } from 'reactstrap';


export default class App extends Component {
  render() {
    return (
      <Container>
        <AddBar />
        <TodoList />
      </Container>
    );
  }
}
