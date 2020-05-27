import React from "react";
import { getScore } from "../helpers/db";
import { db } from "../services/firebase";
import CompanyContainer from "../components/companyContainer.jsx";

// export async function Companies() {
//   var data = ["hej", "då"];
//   //data = await getData("company");
// }

class CompaniesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0,
    };
  }

  async componentDidMount() {
    var self = this;
    db.collection("users")
      .doc("50luj5fMi93PBkK4s26N")
      .onSnapshot(function (doc) {
        var data = doc.get("score");
        self.setState({ points: data });
      });
  }

  render() {
    return (
      <div>
        <h4>Vi äro alla ekonomer</h4>
        <p>Din poäng är: {this.state.points}</p>
        <CompanyContainer />
      </div>
    );
  }
}

export default CompaniesPage;
