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
  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: done };
      }
      return todo;
    });
    this.setState({ todos: newTodos });
    console.log(this.state.todos);
  };
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos });
  };
  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      return { ...todo, done };
    });
    this.setState({ todos: newTodos });
  };
  handleClearAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => !todo.done);
    this.setState({ todos: newTodos });
  };
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addItem={this.addTodo} />
          <List
            todos={this.state.todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={this.state.todos}
            checkAllTodo={this.checkAllTodo}
            handleClearAllDone={this.handleClearAllDone}
          />
        </div>
      </div>
    );
  }
}
