import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "./component/Button.jsx";
import TodoList from "./component/TodoList.jsx";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.itemInput = React.createRef();
  }
  handleClick() {
    let newItems = this.state.items;
    newItems = newItems.slice();
    const inputValue = this.itemInput.current.value;
    // console.log(newItems);
    newItems.push(inputValue);
    this.setState({
      items: newItems
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Demo for React in 30 mins - Todo app</h1>
        <input type="text" ref={this.itemInput} />
        <Button onClick={this.handleClick}>Add item</Button>
        <TodoList items={this.state.items} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TodoApp />, rootElement);
