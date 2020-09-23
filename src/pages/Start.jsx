import React, { Component } from "react";
import { auth } from "../services/firebase";

class Start extends Component {
  loggedIn() {
    if (auth.currentUser !== null) {
      return (
        <div>
          <h2>Loggad in som {auth.currentUser.displayName}</h2>
          <button type="submit" onClick={this.logout}>
            Logga ut
          </button>
        </div>
      );
    } else {
      return <div>Logga in eller registrera dig</div>;
    }
  }

  logout() {
    auth.signOut();
    if (auth.currentUser === null) {
      console.log("Utloggad");
    } else {
      console.log("Inte utloggad");
    }
  }

  render() {
    return <div>{this.loggedIn()}</div>;
  }
}

export default Start;
