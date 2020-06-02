import React from "react";
import { getScore } from "../helpers/db";

import { clearUser } from "../helpers/db";
import { db } from "../services/firebase";
import CompanyContainer from "../components/companyContainer.jsx";

import Button from "react-bootstrap/Button";

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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    clearUser();
  }

  async componentDidMount() {
    var self = this;
    db.collection("users")
      .doc("50luj5fMi93PBkK4s26N")
      .onSnapshot(function (doc) {
        var data = doc.get("score");
        var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        console.log(source, " data: ", doc.data());
        self.setState({ points: data });
      });
  }

  render() {
    return (
      <div>
        <h4>Vi äro alla ekonomer</h4>
        <p>Din poäng är: {this.state.points}</p>
        <CompanyContainer />
        <p>Endast för utvecklingssyfte</p>
        <Button onClick={this.handleClick}>Rensa användardata</Button>
      </div>
    );
  }
}

export default CompaniesPage;
