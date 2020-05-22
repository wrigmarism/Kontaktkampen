import React from "react";

class Question extends React.Component {
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

  render() {
    return (
      <div>
        <h5> {this.props.company.question}</h5>
        <p>{this.props.company.answer1}</p>
        <p>{this.props.company.answer2}</p>
        <p>{this.props.company.answer3}</p>
      </div>
    );
  }
}

export default Question;
