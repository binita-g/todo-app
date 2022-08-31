import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
 
export class TodoList extends Component {
constructor(props) {
    super(props);
    
    this.state = {
        tasks: []
    };

    this.addTask = this.addTask.bind(this);
    }
    
    addTask(e) {
        // If the user inputs a task, create a task object.
        if (this._inputElement.value.length > 0) {
            // Task object needs to have a unique ID, so use the current date.
            var newTask = {
              text: this._inputElement.value,
              key: Date.now()
            };
         
            // Maintain a list of all the tasks in an array.
            this.setState((prevState) => {
              return { 
                tasks: prevState.tasks.concat(newTask) 
              };
            });
           
            this._inputElement.value = "";
          }
           
          console.log(this.state.tasks);
    
          // Prevent page reload on submit 
          e.preventDefault();
    }

  render() {
    return (
      <div className="todoList">
        <div className="inputField">
          <form onSubmit={this.addTask}>
            <input ref={(c) => this._inputElement = c} 
                placeholder="Enter task">
            </input>
            <button type="submit" id="addButton">Add</button>
          </form>
        </div>

        <TodoItems entries={this.state.tasks}/>
      </div>
    );
  }
}
 
export default TodoList;
 