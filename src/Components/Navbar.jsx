import React, { useState, useContext, useEffect } from "react";
import logo from "../imgs/logo.png";
import defultUsr from "../imgs/default-usr.png";
import { Link } from "react-router-dom";
import { ContextObj } from "../Context";

export default function Navbar() {
  const [showSettings, setShowSettings] = useState(false);
  const [shouldLogout, setShouldLogout] = useState(false);
  const { user, setUser } = useContext(ContextObj);

  const clickHandler = () => {
    setShowSettings((prevShowSettings) => {
      return !prevShowSettings;
    });
  };

  useEffect(() => {
    if (shouldLogout) {
      setUser({
        usrName: "",
        email: "",
        pwd: "",
        pwd2: "",
        imgLnk: "",
        age: "",
      });
      localStorage.removeItem("user")
    }
  }, [shouldLogout]);

  return (
    <nav>
      <div className="left">
        <img src={logo} />
      </div>
      <div className="right">
        <img
          src={user.imgLnk !== "" ? user.imgLnk : defultUsr}
          onClick={clickHandler}
        />
        {showSettings && (
          <div className="user-settings">
            {user.usrName === "" ? (
              <Link to="/login" className="login">
                Login
              </Link>
            ) : (
              <>
                <Link to="/login" className="profile">
                  Profile
                </Link>

                <span className="profile" onClick={() => setShouldLogout(true)}>Logout</span>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
