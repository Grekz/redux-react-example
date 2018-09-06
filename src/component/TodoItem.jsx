import React from "react";

const TodoItem = props => (
  <li {...props}>{props.children || "default emptyitem"}</li>
);
export default TodoItem;
