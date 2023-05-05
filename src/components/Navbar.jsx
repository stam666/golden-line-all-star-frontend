import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

import Config from "../assets/configs/configs.json";
import {cookieExists, deleteCookie} from "../utils/cookies";

const Navbar = () => {
  const handleLogout = async () => {
    localStorage.clear();
    (await cookieExists("username")) && (await deleteCookie("username"));
    (await cookieExists("userID")) && (await deleteCookie("userID"));
    await axios.get(`${Config.BACKEND_URL}/api/v1/auth/logout`, {
      withCredentials: true,
    });

    window.location.assign("/");
  };

  return (
    <div className="navbar-container">
      <h1 style={{marginLeft: "32px"}}>Restaurant yum yum</h1>
      <div className="content-container">
        <nav>
          {localStorage.getItem("user_id") ? (
            <>
              <h3 className="content">hi {localStorage.getItem("username")}</h3>
              <Link to="/bot" className="content">
                Bot Chat
              </Link>
              <Link to="/engagement" className="content">
                Engagement
              </Link>
              <Link className="content" onClick={handleLogout}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/bot" className="content">
                Bot Chat
              </Link>
              <Link to="/" className="content">
                Sign in
              </Link>
              <Link to="/signup" className="signup content">
                Create Account
              </Link>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
