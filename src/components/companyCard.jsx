import React from "react";
import ReactDOM from "react-dom";
import { getData } from "../helpers/db";

import Question from "./question";
import Text from "./text";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

//Detta är det enskilda företagets container som ska displaya all information.
//Denna ska enligt min tanke få datan från föräldrarklassen "companyContainer" som den sedan visar ut.
class CompanyCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openCard: false,
      text: true,
      activeButtonText: true,
      activeButtonQuestion: false,
      //1=inte svarat på. 2=svarat men fel. 3=svarat rätt
      completedQuestion: 1,
    };
    this.handleClickText = this.handleClickText.bind(this);
    this.handleClickQuestion = this.handleClickQuestion.bind(this);
  }

  handleClickText() {
    if (this.state.text == false) {
      this.setState((state) => ({
        text: !state.text,
        activeButtonQuestion: false,
        activeButtonText: true,
      }));
    }
  }

  handleClickQuestion() {
    if (this.state.text == true) {
      this.setState((state) => ({
        text: !state.text,
        activeButtonQuestion: true,
        activeButtonText: false,
      }));
    }
  }

  async componentDidMount() {}
  // <h1>{this.props.company.name}</h1>
  render() {
    const text = this.state.text;
    let content;
    if (text) {
      content = <Text company={this.props.company} />;
    } else {
      content = (
        <Question
          company={this.props.company}
          completedQuestion={this.props.completedQuestion}
        />
      );
    }
    return (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={this.props.company.ID}>
          {this.props.company.name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={this.props.company.ID}>
          <Card.Body>
            <Button
              variant="light"
              onClick={this.handleClickText}
              active={this.state.activeButtonText}
            >
              Info
            </Button>
            <Button
              variant="light"
              onClick={this.handleClickQuestion}
              active={this.state.activeButtonQuestion}
            >
              Fråga
            </Button>
            {content}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}
export default CompanyCard;
