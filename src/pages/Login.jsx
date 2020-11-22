import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { auth, fireB } from "../services/firebase";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
    console.log(this.state.email);
    e.preventDefault();
    auth.setPersistence(fireB.auth.Auth.Persistence.LOCAL).then((u) => {
      return auth
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
          alert(error);
        });
    });
  }

  redirectToReset() {
    return (
      <Redirect
        to={{
          pathname: "/resetPassword",
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
            <Form>
              <Form.Group controlId="email">
                <Form.Label>E-postadress:</Form.Label>
                <Form.Control
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                />
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
                onClick={this.handleSubmit}
                variant="primary"
              >
                Logga in
              </Button>
            </Form>
            <br />
            <a href="/resetPassword" onClick={this.redirectToReset}>
              Har du glömt ditt lösenord?
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

/* <form>
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
      </form> */
