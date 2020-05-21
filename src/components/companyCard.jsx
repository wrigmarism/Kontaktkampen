import React from "react";
import ReactDOM from "react-dom";
import { getData } from "../helpers/db";

import Accordion from "react-bootstrap/Accordion";

//Detta är det enskilda företagets container som ska displaya all information.
//Denna ska enligt min tanke få datan från föräldrarklassen "companyContainer" som den sedan visar ut.
class CompanyCard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      hits: [],
    };
  }

  async componentDidMount() {}

  render() {
    return <h1>{this.props.company.name}</h1>;
  }
}

export default CompanyCard;
