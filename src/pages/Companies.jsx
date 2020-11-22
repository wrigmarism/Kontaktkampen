import React from "react";
import { clearUser } from "../helpers/db";
import CompanyContainer from "../components/companyContainer.jsx";
import { Example } from "../components/modal.jsx";

// export async function Companies() {
//   var data = ["hej", "då"];
//   //data = await getData("company");
// }

class CompaniesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0,
      allAnswered: false,
      allAnsweredModal: true,
      // showQR: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.AllQuestionsAnswered = this.AllQuestionsAnswered.bind(this);
    this.AllQuestionsAnsweredModal = this.AllQuestionsAnsweredModal.bind(this);
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

  AllQuestionsAnswered() {
    this.setState({
      allAnswered: true,
    });
  }

  AllQuestionsAnsweredModal() {
    this.setState({
      allAnsweredModal: true,
    });
  }

  handleClose() {
    this.setState({
      allAnsweredModal: false,
    });
  }

  async componentDidMount() {
    // const user = auth.currentUser;
    // var self = this;
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
    var allAnsweredText;
    if (this.state.allAnswered) {
      allAnsweredText =
        "Dina svar är nu sparade, tack för att du deltog i Kontaktkampen";
    }
    var modal;
    if (this.state.allAnsweredModal) {
      modal = <Example />;
    }
    return (
      <div className="main">
        {modal}
        <h4>Företagsfrågor</h4>
        <p>
          Du svarar genom att välja rätt alternativ och klicka på knappen
          "välj". Facit kommer att komma upp efter att tävlingen är avslutad och
          vinnarna kommer att meddelas på fredag.
        </p>
        <div>{allAnsweredText}</div>
        {/* <p>Din poäng är: {this.state.points}</p> */}
        {/* <Button onClick={this.handleQRCklick}>Fota QR-kod</Button> */}
        {/* {reader} */}
        <CompanyContainer
          user={this.props.user}
          AllQuestionsAnswered={this.AllQuestionsAnswered}
          AllQuestionsAnsweredModal={this.AllQuestionsAnsweredModal}
        />
      </div>
    );
  }
}

export default CompaniesPage;
