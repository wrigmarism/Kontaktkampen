import React, { Component } from "react";
import { getStaticText } from "../helpers/db";
import "../styles/styles.css";
import CookieDisclaimer from 'react-cookie-disclaimer';
//import {getView} from "../components/view";

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "",
      body1: "",
      body2: "",
      body3: "",
      prizes: [],
    };
  }

  async componentDidMount() {
    const text = await getStaticText("start");
    this.setState({
      header: text.header,
      body1: text.body1,
      body2: text.body2,
      body3: text.body3,
      prizes: text.Prizes,
    });
  }

  render() {
    const prizes = [];

    this.state.prizes.forEach((prize) => {
      prizes.push(<li key={prize}>{prize}</li>);
    });

    return (
      
      <div className="main">
        <div className="container">
          <div className="box">
          
            <h4>{this.state.header}</h4>
            <p>{this.state.body1}</p>
            <p>{this.state.body2}</p>
            <p>
              <b>{this.state.body3}</b>
            </p>
            <ul>{prizes}</ul>
            <p>
              <font size="1">
                Kontaktkampen är del av{" "}
                <a href="https://kontaktdagarna.se" target="_blank">
                  Kontaktdagarna
                </a>
                . Om du har några frågor som rör applikationen eller tävlingen,
                kontakta Kontaktdagarnas{" "}
                <a href="mailto:christoffer.wrigmar@kontaktdagarna.se">
                  IT-ansvarige
                </a>
                .
              </font>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Start;
