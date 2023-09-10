import React from "react";

class TodoItem extends React.Component {
  deleteBtnhandler() {
    alert("anda menekan button delete");
  }

  btnHandler(type) {
    alert(`Anda menekan button ${type}`);
  }
  render() {
    return (
      <div className="my-1 todo-item-container d-flex flex-row justify-content-between">
        {this.props.todoData.activity} ID: {this.props.todoData.id}
        <div>
          <button
            onClick={() => this.props.deleteTodoHandler(this.props.todoData.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
          <button
            disabled={this.props.todoData.isFinished}
            onClick={() =>
              this.props.completeTodoHandler(this.props.todoData.id)
            }
            className="btn btn-success"
          >
            {
              // if ternary
              this.props.todoData.isFinished ? <strong>Finished</strong> : <em>Complete</em>
            }
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
