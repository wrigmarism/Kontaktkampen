import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { auth } from "../config/firebase";

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
      edu1: false,
      edu2: false,
      edu3: false,
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
        Utbildning:
        <br />
        <input type="checkbox" id="edu1" name="edu1" value="Ekonomi"></input>
        Ekonom
        <br />
        <input
          type="checkbox"
          id="edu2"
          name="edu2"
          value="Systemvetenskap"
        ></input>
        Systemvetare
        <br />
        <input type="checkbox" id="edu3" name="edu3" value="MKV"></input>
        Medievetare
        <br />
        <button type="submit" onClick={this.handleSignup}>
          Registrera
        </button>
      </form>
    );
  }
}

export default Signup;
