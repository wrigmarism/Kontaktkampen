import React, { Component } from "react";
import { auth } from "../services/firebase";
import { getStaticText } from "../helpers/db";
import "../styles/styles.css";
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
    return (
      <div className="main">
        <div className="container">
          <div className="box">
            {/* {this.checkLogIn()} */}
            <p>
              <h4>{this.state.header}</h4>
            </p>
            <p>{this.state.body1}</p>
            <p>{this.state.body2}</p>
            <p>{this.state.body3}</p>
              {this.state.prizes.forEach(prize => {
                return "hej"
              })}
            <p><font size="1"><b>Kontaktkampen är del av <a href="https://kontaktdagarna.se" target="_blank">Kontaktdagarna</a></b><br />
            Om du har några frågor som rör Kontaktkampen, kontakta Kontaktdagarnas <a href="mailto:christoffer.wrigmar@kontaktdagarna.se">IT-ansvarige</a>.</font></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Start;
