import React, { Component } from "react";
import { auth } from "../services/firebase";
import { createUser } from "../helpers/db";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";
import Popup from "./Popup";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.toggleError = this.toggleError.bind(this);
    this.state = {
      name: "",
      email: "",
      password: "",
      showPopup: false,
      showError: false,
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
        createUser(auth.currentUser, auth.currentUser.uid, this.state.name);
        return (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        );
      })
      .catch((error) => {
        alert(error);
      });
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  toggleError() {
    this.setState({
      showError: !this.state.showError,
    });
  }

  render() {
    const { error } = this.props;
    const { showError } = this.state;
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
            {this.state.showPopup ? (
              <Popup closePopup={this.togglePopup.bind(this)} />
            ) : null}
            <h4>Registrera användare</h4>
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
                  Vinnarna kommer kontaktas per e-post, så var säker på att du
                  skriver in rätt e-postadress.
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
                <Form.Text className="text-muted">
                  <p>
                    Genom att registrera dig så godkänner du vår{" "}
                    <a href="#" onClick={this.togglePopup}>
                      behandling av din data
                    </a>
                    .
                  </p>
                </Form.Text>
              </Form.Group>
              {showError && (
                <error
                  error={error}
                  isCloseable={true}
                  toggleError={this.toggleError}
                />
              )}
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
        <button type="button" onClick={this.handleSignup}>
          Registrera
        </button>
      </form> */
