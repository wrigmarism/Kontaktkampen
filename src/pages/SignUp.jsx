import React, { Component } from "react";
import { auth } from "../services/firebase";
import { createUser } from "../helpers/db";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        this.updateUser(auth.currentUser, this.state.name);
        createUser(auth.currentUser, auth.currentUser.uid);
        return (
          <Redirect
            to={{
              pathname: "/",
              state: { uid: this.state.uid },
            }}
          />
        );
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
            <Form>
              <Form.Group controlId="userName">
                <Form.Label>Namn:</Form.Label>
                <Form.Control
                  value={this.state.name}
                  onChange={this.handleChange}
                  type="text"
                  name="name"
                  id="name"
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>E-postadress:</Form.Label>
                <Form.Control
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                />
                <Form.Text className="text-muted">
                  Vi kommer aldrig att dela din e-mail med andra
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Lösenord:</Form.Label>
                <Form.Control
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                />
              </Form.Group>
              <Button
                type="submit"
                onClick={this.handleSignup}
                variant="primary"
              >
                Registrera
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;

{
  /* <form>
        <label>
          Namn:
          <br />
          <input
            
          ></input>
        </label>
        <br />
        <label>
          E-postadress:
          <br />
          <input
            
          ></input>
        </label>
        <br />
        <label>
          Lösenord:
          <br />
          <input
            
          ></input>
        </label>
        <br />
        <button >
          Registrera
        </button>
      </form> */
}
