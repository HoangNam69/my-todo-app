import React from "react";

class AddTodo extends React.Component {
    render() {
        return <div className="add-todo">
            <input type="text" className="add-todo-input" placeholder="Add todo..." />
            <button className="add-todo-btn">Submit</button>
        </div>;
    }
}

export default AddTodo;