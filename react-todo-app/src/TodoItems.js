import React, { Component } from "react";
 
class TodoItems extends Component {
  createTasks(task) {
    return <li key={task.key}>{task.text}</li>
  }
 
  // Render each task as a list item.
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    // Render each list item in a list.
    return (
      <ul className="taskList">
          {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;