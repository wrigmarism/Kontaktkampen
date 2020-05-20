import React from "react";
import ReactDOM from "react-dom";
import { getData } from "../helpers/db";
import CompanyContainer  from "../components/companyContainer.jsx";

// export async function Companies() {
//   var data = ["hej", "då"];
//   //data = await getData("company");
  
// }
class CompaniesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
    };
  }


  render() {
    return (
      <div>
        <CompanyContainer />
        </div>
    )
  }
}

export default CompaniesPage;