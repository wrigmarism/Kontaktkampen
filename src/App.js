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

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      admin: false,
      signedIn: false,
    };
  }

  async componentDidMount() {
    auth.onAuthStateChanged((userAuth) => {
      this.setState({
        user: userAuth,
      });
    });
  }

  onSignInSuccess() {
    this.setState({ signedIn: true });
    return false;
  }

  handleSignOut() {
    auth.signOut();
    this.setState({ signedIn: false });
  }

  render() {
    console.log("Inloggad: " + this.state.signedIn);
    return (
      <Menu
        onSignInSuccess={this.onSignInSuccess}
        handleSignOut={this.handleSignOut}
      />
    );
  }
}

export default App;
