import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import MyNavbar from "./components/MyNavbar";
import TodoPage from "./pages/TodoPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <TodoPage />
      </div>
    );
  }
}

export default App;
