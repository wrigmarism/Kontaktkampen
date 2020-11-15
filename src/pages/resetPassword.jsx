import React, { Component } from "react";
import {auth} from "../services/firebase";
import { Redirect } from "react-router-dom";
import "../styles/styles.css"

class ResetPassword extends Component {
    constructor(props){
      super(props);
      this.state = {
          email: "",
      }

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

      ResetPassword(){

      }

    render() {
        if (auth.currentUser !== null) {
            return (
              <Redirect
                to={{
                  pathname: "/",
                  state: { uid: this.state.uid },
                }}
              />
            );
          }
        return (
        <div className="main">
            <div className="container">
                <div className="box">
                    <h4>Återställ lösenord</h4>
                    <form className="resetPassword">
                        <label for="email">Email att skicka återställningsmail till:</label><br />
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange}></input><br />
                        <button type="submit">Återställ lösenord</button>
                    </form>
                </div>
            </div>
        </div>
        );
      }
}

export default ResetPassword;