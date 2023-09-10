import React from "react";
import "../css/style.css";
import TodoItem from "../components/TodoItem";
import Axios from "axios";
import { connect } from "react-redux";

class TodoPage extends React.Component {
  state = {
    todoList: [],
    inputTodo: "",
  };

  fetchTodo = () => {
    Axios.get("http://localhost:2000/todo")
      .then((response) => {
        console.log(response.data);
        this.setState({ todoList: response.data });
        this.props.changeTodo(response.data.length);
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
      <div className="centered-container">
        <h1>Todo List</h1>
        <button onClick={this.fetchTodo} className="btn btn-success">
          Get My Todo List {this.props.todoGlobalState.todoCount}
        </button>
        {this.renderTodoList()}
        <div>
          <input onChange={this.inputHandler} type="text" className="mx-3" />
          <button onClick={this.addTodo} className="btn btn-primary">
            Add Todo
          </button>
          <button
            onClick={this.props.incrementTodoCount}
            className="btn btn-warning"
          >
            Increment Todo
          </button>
          <button
            onClick={this.props.decrementTodoCount}
            className="btn btn-info"
          >
            Uncrement Todo
          </button>
          <button
            onClick={() => this.props.changeTodo(7)}
            className="btn btn-dark"
          >
            Change Todo
          </button>
        </div>
      </div>
    );
  }
}

const incrementTodoCount = () => {
  return {
    type: "INCREMENT_TODO_COUNT",
  };
};

const decrementTodoCount = () => {
  return {
    type: "DECREMENT_TODO_COUNT",
  };
};

const changeTodoCount = (newCount) => {
  return {
    type: "CHANGE_TODO_COUNT",
    payload: newCount,
  };
};

const mapStateToProps = (state) => {
  return {
    testingProps: 0,
    todoGlobalState: state.todo,
  };
};

const mapDispatchToProps = {
  incrementTodoCount: incrementTodoCount,
  decrementTodoCount: decrementTodoCount,
  changeTodo: changeTodoCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
