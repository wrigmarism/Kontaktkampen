import React from "react";
import { analytics } from "../services/firebase";
import { clearUser } from "../helpers/db";
import CompanyContainer from "../components/companyContainer.jsx";
import { Example } from "../components/modal.jsx";
import { Redirect } from "react-router-dom";

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
      allAnsweredModal: false,
      // showQR: false,
      redirect: false,
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
    analytics.logEvent(
      "User submitted  all questions: " + this.props.user.name
    );
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

  async componentDidUpdate() {
    if (this.props.user == null && this.state.redirect == false) {
      this.setState({ redirect: true });
    }
  }

  render() {
    var redirect = this.state.redirect ? <Redirect push to="/" /> : null;
    // let reader;
    // if (this.state.showQR == true) {
    //   reader = <Test />;
    // } else {
    //   reader = <div></div>;
    // }
    var allAnsweredText;
    if (this.state.allAnswered) {
      allAnsweredText =
        "Dina svar är nu sparade, tack för att du deltog i Kontaktkampen!";
    }
    var modal;
    if (this.state.allAnsweredModal) {
      modal = <Example />;
    }
    return (
      <div className="main">
        {modal}
        {redirect}
        <div className="comapnyTextDiv">
          <h4>Företagsfrågor</h4>
          <p>
            Här under hittar du ett urval av de företag som deltar på
            kontaktdagarna i år. Din uppgift är att läsa informationen om
            företagen och sedan svara på den tillhörande frågan. Svara på alla
            frågor för att ha en chans att vinna något av våra fina priser.
            Lycka till!
          </p>
          <div className="allAnsweredText">{allAnsweredText}</div>
        </div>
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
