import React from "react";
import "./SignupNav.css";
function SignupNav(props) {
  return (
    <div className="header">
      <div>
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
      </div>
      <div className="btn">
        <button className="btn_lan">English</button>
        <button className="btn_signup">Sign In</button>
      </div>
    </div>
  );
}

export default SignupNav;
