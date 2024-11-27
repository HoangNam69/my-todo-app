import React, { useState, useEffect } from "react";

function AddTodo(props) {
    const [title, setTitle] = useState("")
    
    const onInputChange = e => {
        setTitle(e.target.value)
    }

    const addToDo = e => {
        e.preventDefault();
        props.addToDo(title);
        setTitle("")
    }

    return (
        <form className="add-todo form-container" onSubmit={addToDo}>
            <input type="text" className="add-todo-input" placeholder="Add todo..." value={title} onChange={onInputChange} />
            <button className="add-todo-btn">Submit</button>
        </form>
    );

}

export default AddTodo;