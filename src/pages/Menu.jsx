import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Companies from "./Companies";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Login from "./Login";
import Start from "./Start";
import Signup from "./SignUp";
import Profile from "./Profile";
import ResetPassword from "./resetPassword";
import { auth } from "../services/firebase";
import "../styles/Navbar.css";

class Menu extends Component {
  handleSignOut() {
    auth.signOut();
    this.setState({ signedIn: false });
  }

  render() {
    let signedIn = auth.currentUser != null;
    return (
      <Router>
        <div>
          <Navbar bg="light" expand="xl" sticky="top">
            <Navbar.Brand href="Start">
              <img
                alt="KD"
                src="./KDLogga.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Kontaktkampen
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="Start">Start</Nav.Link>
                {signedIn && <Nav.Link href="Companies">Frågor</Nav.Link>}
                {signedIn && <Nav.Link href="Profile">Profil</Nav.Link>}
                {!signedIn && <Nav.Link href="Login">Logga in</Nav.Link>}
                {!signedIn && <Nav.Link href="SignUp">Registrera</Nav.Link>}
                {!signedIn && <Nav.Link href="ResetPassword">Återställ lösenord</Nav.Link>}
                {signedIn && (
                  <Nav.Link href="Start" onClick={() => this.handleSignOut()}>
                    Logga ut
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <Start />
            </Route>
            <Route path="/Start">
              <Start />
            </Route>
            <Route path="/Companies">
              <Companies />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/SignUp">
              <Signup />
            </Route>
            <Route path="/ResetPassword">
              <ResetPassword />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Menu;
