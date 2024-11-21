import React from "react";

class AddTodo extends React.Component {
    state = {
        title: ""
    }
    onInputChange = e => {
        this.setState({
            title: e.target.value
        })
    }

    addToDo = e => {
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({ title: "" })
    }
    render() {
        return (
            <form className="add-todo form-container" onSubmit={this.addToDo}>
                <input type="text" className="add-todo-input" placeholder="Add todo..." value={this.state.title} onChange={this.onInputChange} />
                <button className="add-todo-btn">Submit</button>
            </form>
        );
    }
}

export default AddTodo;