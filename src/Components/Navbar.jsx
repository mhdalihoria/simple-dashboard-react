import React, { useState } from "react";
import logo from "../imgs/logo.png";
import defultUsr from "../imgs/default-usr.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showSettings, setShowSettings] = useState(false);

  const clickHandler = () => {
    setShowSettings((prevShowSettings) => {
      return !prevShowSettings;
    });
  };

  return (
    <nav>
      <div className="left">
        <img src={logo} />
      </div>
      <div className="right">
        <img src={defultUsr} onClick={clickHandler} />
      </div>
      {showSettings && (
        <div className="user-settings">
            <span><Link to="/login">Profile</Link></span>
            <span>Logout</span>
        </div>
      )}
    </nav>
  );
}
