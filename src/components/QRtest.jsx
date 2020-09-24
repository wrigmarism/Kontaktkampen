import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { checkQRCode } from "../helpers/db";

class Test extends Component {
  state = {
    result: "No result",
  };

  handleScan = (data) => {
    if (data) {
      checkQRCode(data);
      this.setState({
        result: data,
      });
    }
  };
  handleError = (err) => {
    console.error(err);
  };
  render() {
    checkQRCode("qz3nUjibi0daF19LgL0B");
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "100%" }}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}
export default Test;
