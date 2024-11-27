import React, { useState, useEffect } from "react";
import Header from "./layouts/Header.js";
import AddTodo from "./AddTodo.js";
import ToDos from "./Todos.js";
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

// Hooks khong duoc su dung trong cac class component
// Phai import React de co the su dung syntax jsx
function TodoApp() {
  const [state, setState] = useState({
    todos: []
  });
  // Xu ly thay doi gia tri field completed khi user click to checkbox input
  const handleCheckboxChange = (id) => {
    setState({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  // dung toan tu spread de lay duco danh sach todos hien tai
  const deleteToDo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => {
      setState({
        todos: [
          ...state.todos.filter(todo => todo.id !== id)
        ]
      })
    })
  }

  const addToDo = title => {
    const newToDo = {
      // id: uuidv4(),
      title: title,
      completed: false
    }
    axios.post("https://jsonplaceholder.typicode.com/todos", newToDo).then(res => {
      console.log(res.data)
      setState({
        todos: [...state.todos, res.data]
      })
    })
  }

  useEffect(() => {
    // Cấu hình
    const config = {
      params: {
        _limit: 5 // số data row được trả về
      }
    }
    axios.get("https://jsonplaceholder.typicode.com/todos", config)
      .then(res => setState({ todos: res.data }))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="wrap">
      <div className="app">
        <Header />
        <AddTodo addToDo={addToDo} />
        <ToDos todos={state.todos} handleChange={handleCheckboxChange} deleteToDo={deleteToDo} />
      </div>
    </div>
  );
}

export default TodoApp;