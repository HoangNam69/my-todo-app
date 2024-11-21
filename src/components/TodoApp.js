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
// Xu ly thay doi gia tri field completed khi user click to checkbox input
  handleCheckboxChange = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  // dung toan tu spread de lay duco danh sach todos hien tai
  deleteToDo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo)=>{
          return todo.id !== id;
        })
      ]
    })
  }

  render() {
    return (
      <div className="wrap">
        <div className="app">
          <Header />
          <AddTodo />
          <ToDos todos={this.state.todos} handleChange={this.handleCheckboxChange} deleteToDo={this.deleteToDo}/>
        </div>
      </div>
    );
  }
}

export default TodoApp;
