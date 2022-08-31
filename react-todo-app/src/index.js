import React from "react";
import * as ReactDOM from 'react-dom/client';
import "./index.css";
import TodoList from "./TodoList";
  
var destination = document.querySelector("#container");
  
const root = ReactDOM.createRoot(
    destination
);

root.render(
    <div>
        <TodoList/>
    </div>,
  );
  