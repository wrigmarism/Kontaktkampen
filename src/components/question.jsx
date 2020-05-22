import React from "react";

import Button from "react-bootstrap/Button";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openCard: false,
      selectedOption: "1",
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

  handleOptionChange = (e) => {
    this.setState({
      selectedOption: e.target.value,
    });
  };

  submit = (e) => {
    if (this.state.selectedOption == this.props.company.correctAnswer) {
      console.log("weeey");
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
