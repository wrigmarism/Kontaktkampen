import React, { Component } from "react";
import { auth } from "../services/firebase";
import { createUser } from "../helpers/db";

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
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        this.updateUser(auth.currentUser, this.state.name);
        createUser(auth.currentUser);
      })
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    return (
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
        <button type="submit" onClick={this.handleSignup}>
          Registrera
        </button>
      </form>
    );
  }
}

export default Signup;
