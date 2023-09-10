import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoItem from "./components/TodoItem";
import Axios from "axios";

class App extends React.Component {
  state = {
    todoList: [],
    inputTodo: "",
  };

  fetchTodo = () => {
    Axios.get("http://localhost:2000/todo")
      .then((response) => {
        console.log(response.data);
        this.setState({ todoList: response.data });
      })
      .catch((err) => {
        alert("Terjadi Kesalahan di server");
      });
  };

  deleteTodo = (id) => {
    Axios.delete(`http://localhost:2000/todo/${id}`)
      .then(() => {
        alert("Berhasil Menghapus Data");
        this.fetchTodo();
      })
      .catch((err) => {
        alert("Terjadi Kesalahan di server");
      });
  };

  completeTodo = (id) => {
    Axios.patch(`http://localhost:2000/todo/${id}`, {
      isFinished: true,
    })
      .then((response) => {
        alert("Berhasil Complete Todo");
        this.fetchTodo();
      })
      .catch((err) => {
        alert("Terjadi Kesalahan di server");
      });
  };

  renderTodoList = () => {
    return this.state.todoList.map((val) => {
      return (
        <TodoItem
          completeTodoHandler={this.completeTodo}
          deleteTodoHandler={this.deleteTodo}
          todoData={val}
        />
      );
    });
  };

  addTodo = () => {
    Axios.post("http://localhost:2000/todo", {
      activity: this.state.inputTodo,
      isFinished: false,
    })
      .then(() => {
        alert("Berhasil menambahkan Todo!");
        this.fetchTodo();
      })
      .catch((err) => {
        alert("Terjadi Kesalahan di server");
      });
  };

  inputHandler = (event) => {
    // event.target.value menyimpan value dari input text saat ini
    this.setState({ inputTodo: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <button onClick={this.fetchTodo} className="btn btn-success">
          Get My Todo List
        </button>
        {this.renderTodoList()}
        <div>
          <input onChange={this.inputHandler} type="text" className="mx-3" />
          <button onClick={this.addTodo} className="btn btn-primary">
            Add Todo
          </button>
        </div>
      </div>
    );
  }
}

export default App;
