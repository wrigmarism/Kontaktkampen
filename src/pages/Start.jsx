import React, { Component } from "react";
import {auth } from "../services/firebase";
import {getStaticText} from "../helpers/db";
import "../styles/styles.css"
//import {getView} from "../components/view";

class Start extends Component {
  constructor(props){
    super(props);
    this.state = {
      header: "",
      body1: "",
      body2: "",
      body3: "",
      body4: "",
    }
  }

  async componentDidMount(){
    const text = await getStaticText("start");
    this.setState({header: text.header, body1: text.body1, body2: text.body2, body3: text.body3, body4: text.body4});
  }


  checkLogIn() {
    if (auth.currentUser !== null) {
      return (
        <div>
          <p>Inloggad som:<b> {auth.currentUser.displayName}</b></p>
          
        </div>
      );
    } else {
      return <div>Logga in eller registrera dig</div>;
    }
  }

  render() {
    return (
      <div className="main">
        <div className="container">
          <div className="box">
              {/* {this.checkLogIn()} */}
              <p><h2>{this.state.header}</h2>
              </p>
              <p>{this.state.body1}</p>
              <p>{this.state.body2}</p>
              <p>{this.state.body3}</p>
              <p>{this.state.body4}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Start;
