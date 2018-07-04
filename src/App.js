import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import InputComponent from './components/InputComponent';
import TodoItem from './components/TodoItem';
import {connect} from 'react-redux';
import {actions} from './actions/actioncreators';

class App extends Component {
  /*
  state = {
    todos : [
      {id: 0, task: "Pick up kids"},
      {id: 1, task: "Get Haircut done"}
    ],
    id: 2    
  };
  */

  constructor(props) {
    super(props);
    //this.addTask = this.addTask.bind(this);
    //this.deleteTask = this.deleteTask.bind(this);
    //this.updateTask = this.updateTask.bind(this);    
  }
/*
  addTask(taskInfo) {
    let todos = this.state.todos.slice();
    todos.push({id: this.state.id, task: taskInfo});
    this.setState((state) => ({todos: todos, id: state.id+1}));
  }

  deleteTask(id) {
    let todos = this.state.todos.slice();
    todos = todos.filter((todo) => todo.id !== id);
    this.setState((state) => ({todos: todos, id: state.id}));
  }
  
  updateTask(newTodo) {
    console.log("updateTask");
    let todos = this.state.todos.slice();
    todos[todos.findIndex(e1 => e1.id === newTodo.id)] = newTodo;
  }
  */
 
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header/>
          {/*<InputComponent addTask={this.addTask}/>*/}
          <InputComponent addTask={this.props.addTask}/>
          <hr/>
          <ul className="list-group">
            {
              //this.state.todos.length === 0 ?
              this.props.todos.length === 0 ?
                  <div className="blockquote">You do not have any tasks to do.<br/></div>
                  :                
                  //this.state.todos.map((todo, index) => {                  
                  this.props.todos.map((todo, index) => {
                        return <TodoItem todo={todo} key={index} id={todo.id} deleteTask={this.props.deleteTask} updateTask={this.props.updateTask}/>
              })
            }              
           </ul>
           <Footer/>           
           </div>
      </div>
    );
  }
}

//the todos will be available as a props i.e. this.props.todos inside render method
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addTask: (taskInfo) => dispatch(actions.addTask(taskInfo)),
      deleteTask: (id) => dispatch(actions.deleteTask(id)),
      updateTask: (task) => dispatch(actions.updateTask(task))
    }
}

export const AppList = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);