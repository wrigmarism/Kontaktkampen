import React, { Component } from "react";
import { auth } from "./services/firebase";
import Menu from "./pages/Menu.jsx";
import Footer from "./pages/Footer.jsx";
import "./styles/app.css";
import "./styles/styles.css";
import CookieDisclaimer from 'react-cookie-disclaimer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      admin: false,
      signedIn: false,
      start: {},
    };
  }

  async componentDidMount() {
    auth.onAuthStateChanged((userAuth) => {
      this.setState({
        user: userAuth,
      });
    });
  }

  async componentDidUpdate() {}

  onSignInSuccess() {
    this.setState({ signedIn: true });
    return false;
  }

  handleSignOut() {
    auth.signOut();
    this.setState({ signedIn: false });
  }

  render() {
    return (
      <div className="App">
        <Menu user={this.state.user} />
          <CookieDisclaimer
            background='#4d8bce' 
            bottomPosition={true}
            closeIconSize={30}
            closeIconPositionTop={false}
            color='#f8f9fa'
            cookiePolicyName=''
            cookiePolicyLink='' 
            cookiePolicyText=''
            text='Den här sidan använder cookies till nödvändiga funktioner. Genom att fortsätta använda Kontaktkampen så godkänner du vårt bruk av cookies.'
          />
      <Footer></Footer>
      </div>
    );
  }
}

export default App;
