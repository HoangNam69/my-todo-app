import React, { useState } from "react";
import Header from "./layouts/Header.js";
import AddTodo from "./AddTodo.js";
import ToDos from "./Todos.js";
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

// Hooks khong duoc su dung trong cac class component
// Phai import React de co the su dung syntax jsx
class TodoApp extends React.Component {
  state = {
    todos: []
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => {
      this.setState({
        todos:[
          ...this.state.todos.filter(todo => todo.id !== id)
        ]
      })
    })
  }

  addToDo = title => {
    const newToDo = {
      // id: uuidv4(),
      title: title,
      completed: false
    }

    axios.post("https://jsonplaceholder.typicode.com/todos", newToDo).then(res => {
      console.log(res.data)
      this.setState({
        todos: [...this.state.todos, res.data]
      })
    })
  }

  componentDidMount() {
    // Cấu hình
    const config = {
      params: {
        _limit: 5 // số data row được trả về
      }
    }
    axios.get("https://jsonplaceholder.typicode.com/todos", config)
      .then(res => this.setState({ todos: res.data }))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="wrap">
        <div className="app">
          <Header />
          <AddTodo addToDo={this.addToDo} />
          <ToDos todos={this.state.todos} handleChange={this.handleCheckboxChange} deleteToDo={this.deleteToDo} />
        </div>
      </div>
    );
  }
}

export default TodoApp;