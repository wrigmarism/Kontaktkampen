import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { auth } from "../services/firebase";
import firebase from "firebase";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then((u) => {
      return auth
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
          alert(error);
        });
    });
  }

  redirectToReset(){
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }

  render() {
    if (auth.currentUser !== null) {
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { uid: this.state.uid },
          }}
        />
      );
    }
    return (
      <div className="main">
        <div className="container">
          <div className="box">
            <h4>Logga in</h4>
            <form>
              <label>
                E-postadress:
                <br />
                <input
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                ></input>
              </label>
              <br />
              <label>
                Lösenord:
                <br />
                <input
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                ></input>{" "}
              </label>
              <br />
              <button type="submit" onClick={this.handleSubmit}>
                Logga in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
