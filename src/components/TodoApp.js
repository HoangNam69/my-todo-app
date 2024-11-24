import React, { useState } from "react";
import Header from "./layouts/Header.js";
import AddTodo from "./AddTodo.js";
import ToDos from "./Todos.js";
import Uuid from 'uuid'

// Hooks khong duoc su dung trong cac class component
// Phai import React de co the su dung syntax jsx

function TodoApp() {
  const [todos, setTodos] = useState([{
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
  }])

  var handleCheckboxChange = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }
  var addToDo = title => {
    const newToDo = {
      id: Uuid.v4(),
      title: title,
      completed: false
    }
    setTodos([...todos, newToDo])
  }

  var deleteToDo = id => setTodos([...todos.filter(todo => todo.id !== id)]);

  return (
    <div className="wrap">
      <div className="app">
        <Header />
        <AddTodo addToDo={addToDo} />
        <ToDos todos={todos} handleChange={handleCheckboxChange} deleteToDo={deleteToDo} />
      </div>
    </div>
  );
}

export default TodoApp;
