import { Component } from "react";
import auth from "../config/firebase";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }
  authListener() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.displayName);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }
}

export default Auth;
