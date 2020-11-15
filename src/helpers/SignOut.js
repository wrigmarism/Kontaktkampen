import { Component } from "react";
import { auth } from "../services/firebase";

class Signout extends Component {
  signout() {
    auth.signOut();
  }
  render() {
    return this.signout();
  }
}

export default Signout;
