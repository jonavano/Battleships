import React from "react";
import { Link } from "react-router-dom";

//Functional Component 
const SplashScreen = () => {
  return (
    <div>
      <h3>Welcome to the React Router Tutorial</h3>
      <small>Main Page</small>
      <Link to="/Users">Show List of Users</Link>
    </div>
  );
};

export default SplashScreen;