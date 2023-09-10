import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class MyNavbar extends React.Component {
  render() {
    return (
      <div className="d-flex flex-row justify-content-between bg-dark p-3 text-white align-items-center">
        <h5>Todo List App</h5>
        <h5>You Have 8 Todo Item(s)</h5>
      </div>
    );
  }
}

export default MyNavbar;
