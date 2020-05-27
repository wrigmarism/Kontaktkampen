import React from "react";

import Card from "react-bootstrap/Card";

import "./app.css";

class Text extends React.Component {
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
        <Card.Img
          variant="top"
          src={require("../img/" + this.props.company.img)}
        />
        <h5> {this.props.company.title}</h5>
        <p>{this.props.company.text}</p>
      </div>
    );
  }
}

export default Text;
