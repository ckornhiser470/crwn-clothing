import React from "react";
import "./custom-button-styles.scss";
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    //conditionally render class name if google sign in button
    //appends the additional class name google-sign-in to custom button
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
