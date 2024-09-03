import React from "react";
import Header from "./layouts/Header.js";
import AddTodo from "./AddTodo.js";
import ToDos from "./Todos.js";

class TodoApp extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true,
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };
  render() {
    return (
      <div className="wrap">
        <div className="app">
          <Header />
          <AddTodo />
          <ToDos todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default TodoApp;
