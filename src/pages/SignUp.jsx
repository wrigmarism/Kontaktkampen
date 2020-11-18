import React, { Component } from "react";
import { auth } from "../services/firebase";
import { createUser } from "../helpers/db";
import { Redirect } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  updateUser(u, n) {
    u.updateProfile({
      displayName: n,
    })
      .then(function () {
        console.log(n);
        console.log("Användarnamnet ändrat");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleSignup(e) {
    e.preventDefault();
    const user = auth.currentUser
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        this.updateUser(user, this.state.name);
        createUser(user);
        user.sendEmailVerification().then(function() {
          console.log("Verifiering skickad")
        }).catch(function(error) {
          alert("Fel:" + error)
        });
        return(
          <Redirect
          to={{
            pathname: "/",
          }}
        />
        )
      })
      .catch((error) => {
        alert(error);
      });
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
            <h4>Registrera användare</h4>
      <form>
        <label>
          Namn:
          <br />
          <input
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            id="name"
          ></input>
        </label>
        <br />
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
          ></input>
        </label>
        <br />
        <button type="button" onClick={this.handleSignup}>
          Registrera
        </button>
      </form>
      </div>
      </div>
      </div>
    );
  }
}

export default Signup;
