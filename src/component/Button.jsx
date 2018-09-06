import React from "react";

const Button = props => <button {...props}>{props.children || "Hello"}</button>;
export default Button;
