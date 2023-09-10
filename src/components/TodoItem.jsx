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
          <button onClick={this.deleteBtnhandler} className="btn btn-danger">
            Delete
          </button>
          <button
            onClick={() => this.btnHandler("COMPLETE")}
            className="btn btn-success"
          >
            Complete
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
