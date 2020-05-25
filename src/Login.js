import React, { Component } from "react";
import HomePage from "./HomePage";

export class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      submitted: false,
      logged: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username === "Enzo" && password === "azerty") {
      this.setState({logged: true});
    }
    console.log(`UserName :  ${username} PassWord : ${password}`)
  }

  render() {
    const { username, password, submitted, logged } = this.state;
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            <form name="form" onSubmit={this.handleSubmit}>
              <div
                className={
                  "form-group" + (submitted && !username ? " has-error" : "")
                }
              >
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                />
                {submitted && !username && (
                  <div className="help-block">Username is required</div>
                )}
              </div>
              <div
                className={
                  "form-group" + (submitted && !password ? " has-error" : "")
                }
              >
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
                {submitted && !password && (
                  <div className="help-block">Password is required</div>
                )}
              </div>
              <div className="form-group">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
          {logged && (
          <div>
              <HomePage></HomePage>
          </div>
          )}
        </div>
      </div>
    );
  }
}
