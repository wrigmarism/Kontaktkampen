import React from "react";
import ReactDOM from "react-dom";
import { getData } from "../helpers/db";

import Question from "./question";
import Text from "./text";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Collapse from "react-bootstrap/Collapse";

//Detta är det enskilda företagets container som ska displaya all information.
//Denna ska enligt min tanke få datan från föräldrarklassen "companyContainer" som den sedan visar ut.
class CompanyCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openCard: false,
      text: true,
      //1=inte svarat på. 2=svarat men fel. 3=svarat rätt
      completedQuestion: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      text: !state.text,
    }));
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
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link onClick={this.handleClick}>Info</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={this.handleClick}>Fråga</Nav.Link>
              </Nav.Item>
            </Nav>
            {content}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}
export default CompanyCard;
