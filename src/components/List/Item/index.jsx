import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = { mouse: false, isEdit: false }; //鼠标移入移出
  textInput = React.createRef();

  //鼠标移入移出
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };
  //勾选
  handleCheck = (event) => {
      const { id, updateTodo } = this.props;
      updateTodo(id, event.target.checked);
    
  };
  //删除
  handleDelete = () => {
    const { id, deleteTodo } = this.props;
    deleteTodo(id);
  };

  //编辑
  handleEdite = () => {
    
    this.setState({ isEdit: true });
    this.props.editTodos();
  
};
  //编辑完成
  handleComEdit = (event) => {
      const { id, editTodos } = this.props;
      this.setState({ isEdit: false });
      editTodos(id, event.target.value);
    
  };
  //级别改变
  handleChange = (event) => {
      const { id, changeSign } = this.props;
      changeSign(id, event.target.value);
    
  };
  render() {
    const { name, done, sign } = this.props;
    const { mouse, isEdit } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        className="item_li"
      >
        <input
          type="checkbox"
          checked={done}
          onChange={this.handleCheck}
        />
        {isEdit ? (
          <input
            className="item_ip"
            type="text"
            onBlur={this.handleComEdit}
            defaultValue={name}
            autoFocus
          ></input>
        ) : (
          <span onClick={this.handleEdite} className="item_content">
            {name}
          </span>
        )}
        {mouse && (
          <select
            className="item_select"
            onChange={this.handleChange}
            defaultValue={sign}
          >
            <option value="3">重要</option>
            <option value="2">一般</option>
            <option value="1">不重要</option>
          </select>
        )}
        {mouse && (
          <button onClick={this.handleDelete} className="btn btn-danger">
            删除
          </button>
        )}
      </li>
    );
  }
}
