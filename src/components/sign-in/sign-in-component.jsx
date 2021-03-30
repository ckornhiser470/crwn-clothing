import React, { Component } from "react";
import CustomButton from "../custom-button/custom-button-component";
import FormInput from "../form-input/form-input-component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in-styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  handleSubmit = (event) => {
    //prevents blank form and clears out the field on submit
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    //pull the value and the name off the event target
    //i.e. email as the name of the field and its value
    const { name, value } = event.target;
    this.setState({ [name]: value });
    //dynamically will set state i.e. if name is email, will change that
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password </span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            {" "}
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
        {/* <input type="submit" value="Submit Form" />
         */}
      </div>
    );
  }
}

export default SignIn;
