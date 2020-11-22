import React from "react";
import { SubmitAnswer } from "../helpers/db";

import SubmitButton from "./button";
import Radio from "./radio";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "",
      error: "",
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
    if (this.state.selectedOption != "") {
      SubmitAnswer(this.props.company.ID, this.state.selectedOption);
      this.props.changeSubmited(2);
    } else {
      this.setState({ error: "Du måste välja ett alternativ!" });
    }
  };

  async componentDidMount() {}

  render() {
    var error = this.state.error;
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
            <div className="errorMessage">{error}</div>
            <SubmitButton
              submit={this.submit}
              completedQuestion={this.props.completedQuestion}
              selectedOption={this.state.selectedOption}
            />
          </form>
        </React.Fragment>
      );
    } else {
      question = <p>Tack för ditt svar!</p>;
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
