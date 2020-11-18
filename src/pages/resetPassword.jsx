import React, { Component } from "react";
import { auth } from "../services/firebase";
import { Redirect } from "react-router-dom";
import "../styles/styles.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleReset() {
    auth.sendPasswordResetEmail(this.state.email).then(function() {
      console.log("Återställningsmail skickat")
    }).catch(function(error) {
      console.log("Error: " + error)
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
            <h4>Återställ lösenord</h4>
            <Form>
              <Form.Group controlId="email">
                <Form.Label>
                  E-postadress:
                </Form.Label>
                <Form.Control
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                />
              </Form.Group>
              <Button
                type="button"
                onClick={this.handleReset}
                variant="primary"
              >
                Återställ lösenord
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
