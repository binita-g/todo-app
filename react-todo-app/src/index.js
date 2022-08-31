import React from "react";
import * as ReactDOM from 'react-dom/client';
import "./index.css";
import TodoList from "./TodoList";
  
var destination = document.querySelector("#todoContainer");
  
const root = ReactDOM.createRoot(
    destination
);

root.render(
    <div>
        <TodoList/>
    </div>,
  );
  