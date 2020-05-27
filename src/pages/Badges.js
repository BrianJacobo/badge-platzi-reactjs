import React from "react";
import Navbar from "../components/Navbar";
import headerLogo from "../images/badge-header.svg";
import './styles/Badges.css'

class Badges extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__conatiner">
              <img className="Badges_conf-logo" src={headerLogo} alt="header Logo"/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Badges;
