import React from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

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
      <React.Fragment>
        <Row>
          <Card.Img
            class="companyPic"
            fluid
            variant="top"
            src={this.props.company.img}
          />
        </Row>
        {/* <Row>
          <h5> {this.props.company.title}</h5>
        </Row> */}
        <Row>
          <p>{this.props.company.text}</p>
        </Row>
      </React.Fragment>
    );
  }
}

export default Text;
