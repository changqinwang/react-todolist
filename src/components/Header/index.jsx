import React, { Component } from "react";
import "./index.css";
import { nanoid } from "nanoid";
export default class Header extends Component {
  
  //回车添加
  handleKeyUp = (event) => {
    const { keyCode, target } = event;
    if (keyCode !== 13) return;
    if (target.value.trim() === "") {
      alert("输入不能为空");
      return;
    }
    const todoObj = { id: nanoid(), name: target.value, done: false ,sign: 1};
    this.props.add(todoObj);
    target.value = "";
  };
  render() {
    return (
      <div className="todo-header">
        <p
          className="todo-header_tite"
        >todos</p>
        <input
          className="todo-header_ip"
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
        <button onClick={this.props.sortBySign} className="btn header_btn">
          排序
        </button>
      </div>
    );
  }
}
