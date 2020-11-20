import React from "react";

import {
  getFailedQuestions,
  getCompletedQuestions,
  getUnlockedQuestions,
} from "../helpers/db";

import { UserContext } from "../services/UserProvider.jsx";
import Question from "./question";
import Text from "./text";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//Detta är det enskilda företagets container som ska displaya all information.
//Denna ska enligt min tanke få datan från föräldrarklassen "companyContainer" som den sedan visar ut.
class CompanyCard extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);

    this.state = {
      openCard: false,
      text: true,
      activeButtonText: true,
      activeButtonQuestion: false,
      //1=inte svarat på. 2=svarat men fel. 3=svarat rätt
      completedQuestion: "1",
    };
    this.handleClickText = this.handleClickText.bind(this);
    this.handleClickQuestion = this.handleClickQuestion.bind(this);
    this.changeSubmited = this.changeSubmited.bind(this);
  }

  changeSubmited(e) {
    this.setState((state) => ({
      completedQuestion: e,
    }));
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

  waitForElement(user) {
    console.log(user);
    if (user != null) {
      console.log("w4g4g");
    } else {
      setTimeout(this.waitForElement, 1000);
    }
  }

  async componentDidMount() {
    //denna behöver strukturerars upp mycket bättre
    // getUnlockedQuestions().then((result) => {
    //   if (result[0].includes(this.props.company.ID)) {
    //     this.setState({ completedQuestion: "4" });
    //   }
    // });

    const user = this.context;
    await this.waitForElement(user);
    if (user != null) {
      console.log("gergerg");
      if (user.completedQuestions.includes(this.props.company.ID)) {
        this.setState({ completedQuestion: "3" });
      }
      // getFailedQuestions(user.uid).then((result) => {
      //   if (result.includes(this.props.company.ID)) {
      //     this.setState({ completedQuestion: "2" });
      //   }
      // });
    }
  }

  // <h1>{this.props.company.name}</h1>
  render() {
    const user = UserContext;
    const text = this.state.text;
    let content;
    if (text) {
      content = <Text company={this.props.company} />;
    } else {
      content = (
        <Question
          company={this.props.company}
          changeSubmited={this.changeSubmited}
          completedQuestion={this.state.completedQuestion}
        />
      );
    }
    // var icon = <div></div>;
    // if (this.state.completedQuestion == "3") {
    //   icon = (
    //     <img style={{ width: "20px" }} src={require("../img/trophy.png")}></img>
    //   );
    // } else if (this.state.completedQuestion == "2") {
    //   icon = (
    //     <img style={{ width: "20px" }} src={require("../img/x.png")}></img>
    //   );
    //} //else if (this.state.completedQuestion == "4") { //Ska det verkligen vara en fyra här?
    //   icon = (
    //     <img style={{ width: "20px" }} src={require("../img/lås.png")}></img>
    //   );
    // }
    return (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={this.props.company.ID}>
          <Container fluid>
            <Row>
              <Col style={{ paddingLeft: 0, float: "left" }}>
                {this.props.company.name}
              </Col>
              {/* <Col>
                <div style={{ float: "right" }}>{icon}</div>
              </Col> */}
            </Row>
          </Container>
          {/* {this.props.company.name} */}
          {/* <div style={{ float: "right" }}>
            {this.state.completedQuestion == "3" && <Icon />}
          </div> */}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={this.props.company.ID}>
          <Card.Body style={{ paddingTop: 0, paddingBottom: 0 }}>
            <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
              <Row>
                <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
                  <Button
                    style={{
                      float: "Left",
                      marginTop: 10,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      // backgroundColor: "#1969ae",
                      // borderColor: "#1969ae",
                    }}
                    onClick={this.handleClickText}
                    active={this.state.activeButtonText}
                  >
                    Info
                  </Button>
                  <Button
                    style={{
                      float: "Left",
                      marginTop: 10,
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                      // backgroundColor: "#1969ae",
                      // borderColor: "#1969ae",
                    }}
                    onClick={this.handleClickQuestion}
                    active={this.state.activeButtonQuestion}
                  >
                    Fråga
                  </Button>
                </Col>
              </Row>
              {content}
            </Container>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}
export default CompanyCard;
