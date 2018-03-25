import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Eat", "Sleep", "Go Home"]
    };
  }

  render() {
    const todoComponent = this.state.todos.map(task => <Todo task={task} />);

    return (
      <div>
        <ul>{todoComponent}</ul>
      </div>
    );
  }
}
