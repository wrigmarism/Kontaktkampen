import React from "react";
import ReactDOM from "react-dom";
import { getData } from "../helpers/db";

import Question from "./question";
import Text from "./text";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    };
    this.handleClick = this.handleClick.bind(this);
  }

  openCard() {
    this.setState((this.openCard = true));
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  async componentDidMount() {}
  // <h1>{this.props.company.name}</h1>
  render() {
    return (
      <Card>
        <Router>
          <Accordion.Toggle as={Card.Header} eventKey={this.props.company.ID}>
            {this.props.company.name}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={this.props.company.ID}>
            <Card.Body>
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link as={Link} to="/">
                    Info
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/question">
                    Fråga
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Switch>
                <Route exact path="/question">
                  <Question company={this.props.company} />
                </Route>
                <Route exact path="/">
                  <Text company={this.props.company} />
                </Route>
              </Switch>
            </Card.Body>
          </Accordion.Collapse>
        </Router>
      </Card>
    );
  }
}
export default CompanyCard;
