import React from 'react';
import TodoItem from './TodoItem.js';

class Todos extends React.Component {
    render() {
        return (
            <div>
                <ul className="to-do-list">
                    {
                        this.props.todos.map( (todo) => {
                            return <TodoItem key={todo.id} todo={todo.title} />
                        })
                    }
                </ul>
            </div>
        );
    }

}

export default Todos;