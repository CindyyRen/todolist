import React, { Component } from 'react';
import Item from '../Item';
import './index.css';

export default class index extends Component {
  render() {
    const { todos, updateTodo, deleteTodo } = this.props;
    return (
      <div>
        <ul className="todo-main">
          {todos.map((todo) => (
            <Item
              key={todo.id}
              {...todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
}
