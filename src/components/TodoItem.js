import React from 'react';

class TodoItem extends React.Component {
    render() {
        return (
            <li >{this.props.todo}</li>
        );
    }

}

export default TodoItem;