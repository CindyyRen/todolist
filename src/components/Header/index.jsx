import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './index.css';

export default class index extends Component {
  handleKeyUp = (event) => {
    if (event.keyCode !== 13) return;
    console.log(event.target.value);
    this.props.addItem({ id: nanoid(), name: event.target.value, done: false });
  };
  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认0000"
        />
      </div>
    );
  }
}
