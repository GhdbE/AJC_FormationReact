import React from "react";

import { Login } from "./Login";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import HomePage from "./HomePage";

import "./App.css"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand"><Link to="/homePage">Home</Link></div>
                <div className="navbar-brand"><Link to="/login">LogIn</Link></div>
            </div>  
            
          
        <Switch>
          <Route exact path="/" component={App}></Route>
          <Route path="/homePage" component={HomePage} />
          <Route path="/login" component={Login} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
