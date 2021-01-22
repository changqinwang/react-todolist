import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";
export default class App extends Component {
  //初始化状态
  state = {
    todos: [
      { id: "001", name: "a", done: true, sign: "3" },
      { id: "002", name: "b", done: true, sign: "2" },
      { id: "003", name: "c", done: false, sign: "3" },
      { id: "004", name: "d", done: false, sign: "1" },
    ],
    filter: "all",
    pretodos: [],
    nexttodos: [],
  };
  //添加
  add = (todoObj) => {
    this.setPast()
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    //this.setState({ todos: todoObj });
    this.setState({ todos: newTodos });
  };
  //更新
  updateTodo = (id, done) => {
    //获取状态中的todos
  
    const { todos } = this.state;
    //匹配处理数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done };
      else return todoObj;
    });
    console.log('newTodos',newTodos);
    this.setState({ todos: newTodos }
    );

    this.setPast()
  };
  //删除
  deleteTodo = (id) => {
    this.setPast()
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    this.setState({ todos: newTodos });
  };

  //删除已完成
  clearAllDone = () => {
    this.setPast()
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done;
    });
    this.setState({ todos: newTodos });
  };
  //显示已完成
  allDone = () => {
    this.setState({ filter: "complete" });
  };
  //全部
  allTodos = () => {
    this.setState({ filter: "all" });
  };
  //未完成
  allNoDone = () => {
    this.setState({ filter: "undone" });
  };
  //编辑
  editTodos = (id, name) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, name };
      else return todoObj;
    });
    this.setState({ todos: newTodos });
  };
  //优先级修改
  changeSign = (id, sign) => {
    const { todos } = this.state;
    //匹配处理数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, sign };
      else return todoObj;
    });
    this.setState({ todos: newTodos });
  };
  //排序
  sortBySign = () => {
    const { todos } = this.state;
    const newTodos = todos.sort((a, b) => {
      return b.sign - a.sign;
    });
    this.setState({ todos: newTodos });
  };
  //历史记录
  eidtHistory = (flag) => {
    let { pretodos, todos , nexttodos } = this.state;
    let newTodos
    //回退
    if(flag && pretodos.length!==0){
       newTodos=pretodos.pop()
       nexttodos = [...nexttodos,todos]
    }
    //前进
    else if(nexttodos.length!==0){
      newTodos=nexttodos.pop()
      pretodos = [...pretodos,todos]
    }else{
      return
    }
    this.setState({ todos:newTodos,nexttodos:nexttodos,pretodos:pretodos});
  };
  setPast = ()=>{
    this.setState({
      pretodos:[...this.state.pretodos,this.state.todos.concat()]
    })
   
  }
  render() {
    const { todos} = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header add={this.add} sortBySign={this.sortBySign} />
          <List
          editTodos={this.editTodos}
            todos={todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
            filter={this.state.filter}
            changeSign={this.changeSign}
          />
          <Footer
            todos={todos}
            eidtHistory={this.eidtHistory}
            feature={this.feature}
            clearAllDone={this.clearAllDone}
            allDone={this.allDone}
            allTodos={this.allTodos}
            allNoDone={this.allNoDone}
          />
        </div>
      </div>
    );
  }
}
