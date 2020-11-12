import React, { Component } from "react";
import {auth} from "../services/firebase";
import "../styles/styles.css"

class Profile extends Component {
    constructor(props){
      super(props);
      this.state = {
          user: {}
      }
    }

    checkLogIn() {
        if (auth.currentUser !== null) {
          return (
            <div>
              <p>Inloggad som:<b> {auth.currentUser.displayName}</b></p>
              <p>Email: <b>{auth.currentUser.email} </b></p>

            </div>
          );
        }
      }

    changePassword(){
        /* Byta lösenord */
    }

    changeEmail(){
        /* Byta epostadress */
    }

    deleteUser(){
        /* Radera användare */
    }

    render() {
        return (
        <div className="profile-main">
            <div className="profile-container">
                <div className="profile-box">
                    {this.checkLogIn()}
                    <form classname="changeEmail">
                    <label for="email">Ny email:<br />
                        <input type="email" id="email"></input></label><br />
                        <input type="submit" value="Byt email"></input>
                    </form>
                    <br />
                    <form className="changePassword">
                        <label>Nytt lösenord:<br />
                        <input type="password" id="password1"></input></label><br />
                        <label>Skriv lösenordet igen:<br />
                        <input type="password" id="password2"></input></label><br />
                        <input type="submit" value="Ändra lösenord"></input>
                    </form>
                    <br />
                    <form className="deleteUser">
                        <input type="submit" value="Ta bort användare"></input>
                    </form>
                </div>
            </div>
        </div>
        );
      }
}

export default Profile;