import React, { Component } from "react";
import "./index.css";
import Item from "./Item";
export default class List extends Component {

  render() {
    const { updateTodo, deleteTodo, editTodos, filter, todos ,changeSign} = this.props;
    console.log('list',todos);
    return (
      <ul className="list_main">
        {todos.map((todo) => {
          const item = <Item
            key={todo.id}
            {...todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            editTodos={editTodos}
            changeSign={changeSign}
          />;
          if (filter === "complete" && todo.done) {
            return item;
          }
          if (filter === "undone" && !todo.done) {
            return item;
          }
          if (filter === "all") {
            return item;
          }
          return null;
        })}
      </ul>
    );
  }
}
