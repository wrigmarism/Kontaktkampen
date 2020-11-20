import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./services/firebase";
import Companies from "./pages/Companies.jsx";
import Start from "./pages/Start.jsx";
import Login from "./pages/Login.jsx";
import Menu from "./pages/Menu.jsx";
import Signup from "./pages/SignUp.jsx";
import Signout from "./helpers/SignOut";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./styles/app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      admin: false,
      signedIn: false,
      start: {},
    };
  }

  async componentDidMount() {
    auth.onAuthStateChanged((userAuth) => {
      this.setState({
        user: userAuth,
      });
    });
  }

  async componentDidUpdate() {}

  onSignInSuccess() {
    this.setState({ signedIn: true });
    return false;
  }

  handleSignOut() {
    auth.signOut();
    this.setState({ signedIn: false });
  }

  render() {
    return (
      <div className="App">
        <Menu user={this.state.user} />
      </div>
    );
  }
}

export default App;
