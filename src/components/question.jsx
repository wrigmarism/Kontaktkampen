import React from "react";
import { updateUser } from "../helpers/db";

import SubmitButton from "./button";
import Radio from "./radio";

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
    if (this.state.selectedOption == this.props.company.correctAnswer) {
      updateUser(this.props.company.ID);
      this.props.changeSubmited(3);
    } else {
      this.props.changeSubmited(2);
    }
  };

  async componentDidMount() {}

  render() {
    return (
      <div>
        <h5> {this.props.company.question}</h5>
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
      </div>
    );
  }
}

export default Question;
