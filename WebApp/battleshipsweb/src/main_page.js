import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

//Functional Component 
const MainPage = () => {
  return (
    <div>
      <h3>Welcome to Battleships</h3>
      <img alt="test" src={require('./logo.png')} />
      <small>Main Page</small>
      <Link to="/Users">Play game</Link>
    </div>
  );
};

export default MainPage;