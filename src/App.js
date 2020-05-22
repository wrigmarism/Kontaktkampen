import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Companies from "./pages/Companies.jsx";
import { Start } from "./pages/Start.jsx";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default class App extends React.Component {
  render() {
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
                <Nav.Link href="Companies">Företag</Nav.Link>
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
            </Switch>
        </div>
      </Router>
    );
  }
}
