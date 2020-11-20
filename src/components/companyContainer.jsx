import React from "react";
import ReactDOM from "react-dom";
import { getData } from "../helpers/db";
import { getUser } from "../helpers/db";
import CompanyCard from "./companyCard";
import Spinner from "react-bootstrap/Spinner";

import Accordion from "react-bootstrap/Accordion";
/* Denna komponents syfte är att ta in datan från databasen och sedan för varje objekt i databasen skapa 
en ny komponent av typen "companyCard" med medföljande data. */
class CompanyContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: [],
    };
  }

  async componentDidMount() {
    // I obiwan kenobied dis shiet *dabs
    getData("company").then((result) => {
      this.setState({ companies: result });
    });
  }

  render() {
    var content;
    if (this.state.companies == []) {
      content = <Spinner animation="border" />;
    } else {
      const companies = this.state.companies.map((company, index) => {
        return (
          <CompanyCard
            key={company.ID}
            company={company}
            user={this.props.user}
          />
        );
      });
      content = <Accordion defaultActiveKey="0">{companies}</Accordion>;
    }
    return <React.Fragment> {content} </React.Fragment>;
  }
}
export default CompanyContainer;
