import React, { Component } from "react";
import "../styles/styles.css"

class Profile extends Component {
    constructor(props){
      super(props);
      this.state = {}
    }
    render() {
        return (
        <div className="profile-main">
            <div className="profile-container">
                <div className="profile-box">
                    <p>Hello world</p>
                </div>
            </div>
        </div>
        );
      }
}

export default Profile;