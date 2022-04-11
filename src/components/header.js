import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1> Pakistan Zindabad</h1>
        <Typed
          className="text-typed"
          strings={[
            "Software Engineer",
            "Web Developer",
            "Ios Developer",
            "Android Developer",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </div>
    </div>
  );
};

export default Header;
