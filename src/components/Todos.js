import React from 'react';
import TodoItem from './TodoItem.js';

class Todos extends React.Component {
    render() {
        return (
            <div>
                <ul className="to-do-list">
                    {
                        this.props.todos.map( (i) => {
                            return <TodoItem key={i.id} title={i.title} />
                        })
                    }
                </ul>
            </div>
        );
    }

}

export default Todos;