import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage-component";
import ShopPage from "./pages/shop/shop-component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up-component";

import Header from "./components/header/header-component";

import { auth } from "./firebase/firebase.utils";
// //alt page
// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// );

//turn app from sfc to cc so that we can have access to state to
//see if a user is authenticated or not
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    //normally with componentDidMount woudl fetch info, one off,
    //firebase allows the auth to be checked everytime user signs in or out
    //remeber auth we defined in the firebase.utils.js
    //takes a user

    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  //so when click out, the auth will be done/subscription will be closed
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
