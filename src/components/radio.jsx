import React, { Fragment } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Media from "react-bootstrap/Media";

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    var data;
    if (this.props.completedQuestion != 1) {
      var result;
      if (this.props.completedQuestion == 3) {
        result = (
          <Row>
            <p style={{ paddingTop: 10, paddingBottom: 0, float: "left" }}>
              <Image
                style={{ width: "20px", paddingLeft: 5 }}
                src={require("../img/checkmark.png")}
                fluid
              />
              Rätt svar!
            </p>
          </Row>
        );
      } else if (this.props.completedQuestion == 2) {
        result = (
          <Row>
            <p style={{ paddingTop: 10, paddingBottom: 0, float: "left" }}>
              <Image
                style={{ width: "20px", paddingLeft: 5 }}
                src={require("../img/x.png")}
                fluid
              />
              Fel svar!
            </p>
          </Row>
        );
      }
      //Du svarade rätt du svarede fel med ikoner
      //Sätt inline if statements som kollar om det är det rätta svaret och ge den då en speciell still annars ge den defult
      data = (
        <React.Fragment>
          {result}
          <label>
            <input type="radio" className="form-check-input" disabled />
            {this.props.company.answer1}
          </label>
          <label>
            <input type="radio" className="form-check-input" disabled />
            {this.props.company.answer2}
          </label>
          <label>
            <input type="radio" className="form-check-input" disabled />
            {this.props.company.answer3}
          </label>
        </React.Fragment>
      );
    } else {
      data = (
        <React.Fragment>
          <label>
            <input
              type="radio"
              value="1"
              checked={this.props.selectedOption === "1"}
              onChange={this.props.handleOptionChange}
              className="form-check-input"
            />
            {this.props.company.answer1}
          </label>
          <label>
            <input
              type="radio"
              value="2"
              checked={this.props.selectedOption === "2"}
              onChange={this.props.handleOptionChange}
              className="form-check-input"
            />
            {this.props.company.answer2}
          </label>
          <label>
            <input
              type="radio"
              value="3"
              checked={this.props.selectedOption === "3"}
              onChange={this.props.handleOptionChange}
              className="form-check-input"
            />
            {this.props.company.answer3}
          </label>
        </React.Fragment>
      );
    }
    return <React.Fragment> {data} </React.Fragment>;
  }
}
export default Radio;
