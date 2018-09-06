import React from "react";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ items }) => (
  <ul>
    {items && items.map((item, i) => <TodoItem key={i}>{item}</TodoItem>)}
  </ul>
);
export default TodoList;
