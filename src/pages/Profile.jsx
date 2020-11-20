import React, { Component } from "react";
import {auth} from "../services/firebase";
import { Redirect } from "react-router-dom";
import "../styles/styles.css"

class Profile extends Component {
    constructor(){
      super();
      this.state = {
          newEmail: "",
          newPassword1: "",
          newPassword2: "",
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

      handleChangeEmail() {
        auth.currentUser.updateEmail(this.state.newEmail).then(function() {
            alert("Email ändrad");
          }).catch(function(error) {
            alert("Fel: " + error)
          });
      }

      handleChangePassword(){
          if(this.state.newPassword1 == this.state.newPassword2){
            var user = auth.currentUser;
            var newPassword = this.state.newPassword1;
            
            user.updatePassword(newPassword).then(function() {
              alert("Lösenordet ändrat")
            //   auth.signInWithEmailAndPassword(user.email, newPassword).catch(function(error) {
            //     console.log(error.code + ": " + error.message);
            //   });
            }).catch(function(error) {
              alert("Fel: " + error)
            });
          }
          else{
              alert("Lösenorden stämmer inte överens")
          }
      }

    checkLogIn() {
        console.log(auth.currentUser)
        if (auth.currentUser !== null) {
          return (
            <div>
                <h4>Profil</h4>
                <p>Inloggad som:<b> {auth.currentUser.displayName}</b></p>
                <p>Email: <b>{auth.currentUser.email} </b></p>
            </div>
          );
        }
      }

    render() {
        return (
        <div className="main">
            <div className="container">
                <div className="box">
                    {this.checkLogIn()}
            <form>
              <label>
                Nytt lösenord:
                <br />
                <input
                  onChange={this.handleChange}
                  type="password"
                  name="newPassword1"
                ></input>
              </label>
              <label>
                Lösenordet igen:
                <br />
                <input
                  onChange={this.handleChange}
                  type="password"
                  name="newPassword2"
                ></input>
              </label>
              <br />
              <button type="button" onClick={this.handleChangePassword}>
                Ändra lösenord
              </button>
            </form>
                </div>
            </div>
        </div>
        );
      }
}

export default Profile;