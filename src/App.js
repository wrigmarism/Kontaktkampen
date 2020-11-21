import React, { Component } from "react";
import { auth } from "./services/firebase";
import Menu from "./pages/Menu.jsx";
import Footer from "./pages/Footer.jsx";
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
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
