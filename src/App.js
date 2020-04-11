import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodosList from "./components/Todos-List";
import EditTodo from "./components/Edit-Todo";
import CreateTodo from "./components/Create-Todo";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </Router>
    );
  }
}

export default App;
