import React from "react";
import ReactDOM from "react-dom";
import { getData } from "../helpers/db";
import Company from "../helpers/companyClass.js";
import CompanyCard from "./companyCard";

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
    var data = getData("company");
    var list = [];
    data.then(function(result) {
        result.forEach(function (doc) {
            list.push(doc);
            });
    });
    console.log(list);
    /* Lyckas inte få över listan till min comapnies array 
     När jag lyckades med det i en annan variant så skrev den ut allt två gånger alternativt uppdaterade inte när 
     datan hade laddat in. Så tror bara jag tänker lite knasigt på hur man gör detta på smidigast sätt. Help me obiwan Simpelimp your my only hope*/
    this.setState({companies: list});
  }


  render() {
    const companies = this.state.companies.map((name, move) => {
      return (
        <li key={move}>
          {name}
        </li>
      );
    });
    return (
      <Accordion>
        <CompanyCard />
        {companies}
      </Accordion>
    );
  }
}

export default CompanyContainer;
