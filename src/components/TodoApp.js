import React, { useState, useEffect } from "react";
import Header from "./layouts/Header.js";
import AddTodo from "./AddTodo.js";
import ToDos from "./Todos.js";
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

// Hooks khong duoc su dung trong cac class component
// Phai import React de co the su dung syntax jsx
// Keyword this chỉ sử dụng trong class component
// Khi sử dụng component thì ta sử dụng props như các đối số truyền vào function

function TodoApp() {
  const [state, setState] = useState({
    todos: []
  });

  /**
   * Xu ly thay doi gia tri field completed khi user click to checkbox input
   * @param {id} id id của todo để kiểm tra là todo nào để cập nhật lại trạng thái của checkbox cho todo đó
   */
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

  /**
   * Xử lý xóa todo
   * @param {id} id id của todo nhận được vào hàm khi thực hiện thao tác click button xóa
   */
  const deleteToDo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => {
      setState({
        todos: [
          ...state.todos.filter(todo => todo.id !== id)
          // dung toan tu spread de lay duoc danh sach todos hien tai
        ]
      })
    })
  }

  /**
   * Xử lý add khi form onSubmit
   * @param {title} title là nội dung field được truyền vào sau khi thực hiện submit
   */
  const addToDo = title => {
    const newToDo = {
      // id: uuidv4(), //// Không cần nữa vì trong axios đã có id unique
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

  // Xử lý hiển thị danh sách todos với số dòng dữ liệu được cấu hình trong biến config
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