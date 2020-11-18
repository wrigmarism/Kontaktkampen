import React from "react";

import Button from "react-bootstrap/Button";

class SubmitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    var data;
    if (this.props.completedQuestion == 1) {
      data = (
        <Button onClick={this.props.submit} variant="primary">
          Välj
        </Button>
      );
    } else {
      data = (
        <Button onClick={this.props.submit} variant="primary" disabled>
          Välj
        </Button>
      );
    }

    return <React.Fragment> {data} </React.Fragment>;
  }
}

export default SubmitButton;
