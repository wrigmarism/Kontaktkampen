import React from "react";
import { auth } from "../services/firebase";
import { clearUser } from "../helpers/db";
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
      // showQR: false,
    };
    this.handleClick = this.handleClick.bind(this);
    // this.handleQRCklick = this.handleQRCklick.bind(this);
  }

  // handleQRCklick(e) {
  //   this.setState((prevState) => ({
  //     showQR: !prevState.showQR,
  //   }));
  // }

  handleClick(e) {
    clearUser();
  }

  async componentDidMount() {
    const user = auth.currentUser;
    var self = this;
    // db.collection("users")
    //   .doc(user.uid)
    //   .onSnapshot(function (doc) {
    //     var data = doc.get("score");
    //     var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
    //     console.log(source, " data: ", doc.data());
    //     self.setState({ points: data });
    //   });
  }

  render() {
    // let reader;
    // if (this.state.showQR == true) {
    //   reader = <Test />;
    // } else {
    //   reader = <div></div>;
    // }
    return (
      <div class="main">
        <h4>Företagsfrågor</h4>
        <p>
          Du svarar genom att välja rätt alternativ och klicka på knappen
          "välj". Facit kommer att komma upp efter att tävlingen är avslutad och
          vinnarna kommer att meddelas på fredag.
        </p>
        {/* <p>Din poäng är: {this.state.points}</p> */}
        {/* <Button onClick={this.handleQRCklick}>Fota QR-kod</Button> */}
        {/* {reader} */}
        <CompanyContainer user={this.props.user} />
      </div>
    );
  }
}

export default CompaniesPage;
