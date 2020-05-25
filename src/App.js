import React from "react";

import { Login } from "./Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";

import "./App.css"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/login">LogIn</Link>
            </div>  
            
            <HomePage></HomePage>
          

          <Route exact path="/" Component={App} />
          <Route path="/homePage" Component={HomePage} />
          <Route path="/login" Component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
