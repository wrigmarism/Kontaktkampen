import React from "react";
import { createContext } from "react";
import { getUser } from "../helpers/db";
import { auth } from "./firebase";

export const UserContext = createContext({ user: null });

class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  componentDidMount = async () => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const user = await getUser(userAuth.uid);
        this.setState({ user });
      } else {
        this.setState({
          user: null,
        });
      }
    });
  };

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
