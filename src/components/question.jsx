import React from "react";
import { updateUser, failedQuestions, SubmitAnswer } from "../helpers/db";

import SubmitButton from "./button";
import Radio from "./radio";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "1",
    };
    this.submit = this.submit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange = (e) => {
    this.setState({
      selectedOption: e.target.value,
    });
  };

  submit = (e) => {
    SubmitAnswer(
      this.props.company.ID,
      this.state.selectedOption,
      this.props.uid
    );
    this.props.changeSubmited(2);
    // if (this.state.selectedOption == this.props.company.correctAnswer) {
    //   updateUser(this.props.company.ID);
    //   this.props.changeSubmited(3);
    // } else {
    //   failedQuestions(this.props.company.ID);
    //   this.props.changeSubmited(2);
    // }
  };

  async componentDidMount() {}

  render() {
    var question = "";
    if (this.props.completedQuestion == 1) {
      question = (
        <React.Fragment>
          <form>
            <div className="form-check">
              <Radio
                company={this.props.company}
                handleOptionChange={this.handleOptionChange}
                selectedOption={this.state.selectedOption}
                completedQuestion={this.props.completedQuestion}
              />
            </div>
            <SubmitButton
              submit={this.submit}
              completedQuestion={this.props.completedQuestion}
              selectedOption={this.state.selectedOption}
            />
          </form>
        </React.Fragment>
      );
    } else {
      question = <p>Denna fråga är redan besvarad!</p>;
    }
    return (
      <React.Fragment>
        <Row style={{ paddingTop: 10, paddingBottom: 0 }}>
          <Col>
            <h5> {this.props.company.question}</h5>
          </Col>
        </Row>
        {question}
      </React.Fragment>
    );
  }
}

export default Question;
