import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoItem from "./components/TodoItem";

class App extends React.Component {
  state = {
    namaKu: "Reza",
    user: {
      username: "Fioreza Radhin Naufal",
      email: "fioreza@gmail.com",
    },
    Array: ["Pisang", "Kucing", "Kambing"],
    todoList: [
      { activity: "Makan", id: 1 },
      { activity: "Mandi", id: 2 },
      { activity: "Coding", id: 3 },
      { activity: "Cuci Piring", id: 4 },
    ],
  };

  renderTodoList = () => {
    return this.state.todoList.map((val) => {
      return <TodoItem todoData={val} />;
    });
  };

  addTodo = () => {
    // this.setState({ namaKu: "Laela" });
    this.setState({
      todoList: [...this.state.todoList],
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <h1>{this.state.namaKu}</h1>
        {this.renderTodoList()}
        <button onClick={this.addTodo} className="btn btn-primary">
          Add Todo
        </button>
      </div>
    );
  }
}

export default App;
