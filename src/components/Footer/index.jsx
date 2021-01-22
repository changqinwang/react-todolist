import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  //清除已完成
  render() {
    const { todos } = this.props;
    //总
    const total = todos.length;
    //已完成
    const doneTodos = todos.reduce((pre, curr) => {
      return pre + (curr.done ? 1 : 0);
    }, 0);
    console.log('list',todos);
    return (
      <div className="todo-footer">
        <span>
          <span>已完成 {doneTodos}</span> / 全部 {total}
        </span>
        <button onClick={this.props.allTodos} className="btn btn-danger">
          全部
        </button>
        <button onClick={this.props.allDone} className="btn btn-danger">
          已完成
        </button>
        <button onClick={this.props.allNoDone} className="btn btn-danger">
          未完成
        </button>
        <button onClick={this.props.clearAllDone} className="btn btn-danger">
          清除已完成任务
        </button>
        <button
          className="btn btn-danger footer_nex"
          onClick={()=>{this.props.eidtHistory(false)}}
        ></button>
        <button
          className="btn btn-danger footer_pre"
          onClick={()=>{this.props.eidtHistory(true)}}
        ></button>
      </div>
    );
  }
}
