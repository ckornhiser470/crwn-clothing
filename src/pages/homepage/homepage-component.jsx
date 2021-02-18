import React from "react";

import Directory from "./../../components/directory/directory-component";

import "./homepage-styles.scss";
//Use functional component because don't need to deal with satte
const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);
export default HomePage;
