import React from "react";
import { updateUser } from "../helpers/db";

import Button from "react-bootstrap/Button";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "1",
    };
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
            <label>
              <input
                type="radio"
                value="1"
                checked={this.state.selectedOption === "1"}
                onChange={this.handleOptionChange}
                className="form-check-input"
              />
              {this.props.company.answer1}
            </label>
          </div>

          <div className="form-check">
            <label>
              <input
                type="radio"
                value="2"
                checked={this.state.selectedOption === "2"}
                onChange={this.handleOptionChange}
                className="form-check-input"
              />
              {this.props.company.answer2}
            </label>
          </div>

          <div className="form-check">
            <label>
              <input
                type="radio"
                value="3"
                checked={this.state.selectedOption === "3"}
                onChange={this.handleOptionChange}
                className="form-check-input"
              />
              {this.props.company.answer3}
            </label>
          </div>
          <Button onClick={this.submit} variant="primary">
            Välj
          </Button>
        </form>
      </div>
    );
  }
}

export default Question;
