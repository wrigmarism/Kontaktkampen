import React from "react";
import { getData, getUserData } from "../helpers/db";
import CompanyCard from "./companyCard";

import Accordion from "react-bootstrap/Accordion";
/* Denna komponents syfte är att ta in datan från databasen och sedan för varje objekt i databasen skapa 
en ny komponent av typen "companyCard" med medföljande data. */
class CompanyContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: [],
      answeredCompanies: [],
      numberOfAnsweredQuestions: 0,
      numberOfTotalQuestions: 0,
      databaseCheck: true,
    };
    this.CheckNumberOfAnsweredQuestions = this.CheckNumberOfAnsweredQuestions.bind(
      this
    );
  }

  async CheckNumberOfAnsweredQuestions() {
    if (
      this.state.numberOfAnsweredQuestions + 1 ==
      this.state.numberOfTotalQuestions
    ) {
      this.props.AllQuestionsAnswered();
      this.props.AllQuestionsAnsweredModal();
    }
    this.setState((state) => ({
      numberOfAnsweredQuestions: state.numberOfAnsweredQuestions + 1,
    }));
  }

  async componentDidMount() {
    // I obiwan kenobied dis shiet *dabs
    getData("company").then((result) => {
      this.setState({
        companies: result,
        numberOfTotalQuestions: result.length,
      });
    });
  }

  async componentDidUpdate() {
    if (this.props.user != null && this.state.databaseCheck) {
      getUserData(this.props.user.uid).then((result) => {
        this.setState({
          numberOfAnsweredQuestions: result.length,
          answeredCompanies: result,
        });
        if (result.length == this.state.numberOfTotalQuestions) {
          this.props.AllQuestionsAnswered();
        }
      });
      this.setState({ databaseCheck: false });
    }
  }

  render() {
    var content;
    if (this.state.companies == []) {
      content = "";
    } else {
      const companies = this.state.companies.map((company, index) => {
        return (
          <CompanyCard
            key={company.ID}
            company={company}
            answeredCompanies={this.state.answeredCompanies}
            CheckNumberOfAnsweredQuestions={this.CheckNumberOfAnsweredQuestions}
          />
        );
      });
      content = <Accordion defaultActiveKey="0">{companies}</Accordion>;
    }
    return <React.Fragment> {content} </React.Fragment>;
  }
}
export default CompanyContainer;
