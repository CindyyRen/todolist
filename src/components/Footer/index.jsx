import React, { Component } from 'react';
import './index.css';
export default class index extends Component {
  handleCheckAll = (e) => this.props.checkAllTodo(e.target.checked);
  render() {
    const { todos } = this.props;

    const doneCount = todos.reduce((pre, todo) => {
      return pre + (todo.done ? 1 : 0);
    }, 0);
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={doneCount === todos.length && todos.length !== 0}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{todos.length}
        </span>
        <button
          className="btn btn-danger"
          onClick={this.props.handleClearAllDone}
        >
          清除已完成任务
        </button>
      </div>
    );
  }
}
