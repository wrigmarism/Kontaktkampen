import React, { Component } from "react";
import { auth } from "../services/firebase";

class Start extends Component {
  checkLogIn() {
    if (auth.currentUser !== null) {
      return (
        <div>
          <h2>Inloggad som {auth.currentUser.displayName}</h2>
        </div>
      );
    } else {
      return <div>Logga in eller registrera dig</div>;
    }
  }

  render() {
    return <div>{this.checkLogIn()}</div>;
  }
}

export default Start;
