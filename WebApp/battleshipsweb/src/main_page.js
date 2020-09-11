import React from "react";
import { Link } from "react-router-dom";
import background from './images/waves2.png'

//Functional Component 
const MainPage = () => {

  const styleObj = {
    backgroundImage:`url(${background})`,
    width: "100%", 
    heigth: "50vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // position: 'absolute',
    // left:0,
    // right:0,
    margin: 0,
    // textAlign: "center",
    // paddingTop: "100px",
}

const logoStyle = {
  width: "20", 
  height: "40",
}

  return (
    <div style={styleObj }>
      <h3>Welcome to Battleships</h3>
      <img style={logoStyle}alt="test" src={require('./images/logo.png')} />
      {/* <small>Main Page</small> */}
      <Link to="/Users">Play game</Link>
    </div>
  );
};

export default MainPage;