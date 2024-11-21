import React from 'react';
import TodoItem from './TodoItem.js';

class Todos extends React.Component {
    render() {
        return (
            <div>
                <ul className="to-do-list">
                    {
                        this.props.todos.map(todo =>
                            <TodoItem key={todo.id} todo={todo} handleChange={this.props.handleChange} deleteToDo={this.props.deleteToDo}/>
                        )
                    }
                </ul>
            </div>
        );
    }

}

export default Todos;