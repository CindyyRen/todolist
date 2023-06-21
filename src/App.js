import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

export default class App extends Component {
  state = {
    todos: [
      { id: '1', name: '吃饭', done: true },
      { id: '2', name: '睡觉', done: true },
      { id: '3', name: '打豆豆', done: false },
    ],
  };
  addTodo = (todo) => {
    this.setState({ todos: [todo, ...this.state.todos] });
  };
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addItem={this.addTodo} />
          <List todos={this.state.todos} />
          <Footer />
        </div>
      </div>
    );
  }
}
