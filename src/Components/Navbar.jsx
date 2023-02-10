import React, { useState, useContext } from "react";
import logo from "../imgs/logo.png";
import defultUsr from "../imgs/default-usr.png";
import { Link } from "react-router-dom";
import { ContextObj } from "../Context";

export default function Navbar() {
  const [showSettings, setShowSettings] = useState(false);
  const { user } = useContext(ContextObj);

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
        <img src={user.imgLnk !== "" ? user.imgLnk : defultUsr} onClick={clickHandler} />
      </div>
      {showSettings && (
        <div className="user-settings">
          {user.usrName === "" ? (
            <span>
              <Link to="/login">Login</Link>
            </span>
          ) : (
            <>
              <span>
                <Link to="/login">Profile</Link>
              </span>
              <span>Logout</span>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
