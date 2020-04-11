import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodosList from "./components/Todos-List";
import EditTodo from "./components/Edit-Todo";
import CreateTodo from "./components/Create-Todo";

import "bootstrap/dist/css/bootstrap.min.css";

import logo from "./logo/logo512.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img
              src={logo}
              width="30"
              height="30"
              alt="React Logo (example image)"
            />
            <Link to="/" className="navbar-brand">
              MERN-Stack Todo App
            </Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Todos
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    Create Todo
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
