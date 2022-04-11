import React from "react";
import mylogo from "../logo.png";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
      <div className="container">
        <div className="container-fluid">
          <div className="main-nav-div">
            <Link className="navbar-brand" href="#">
              <img className="logo" src={mylogo} alt="mylogo" />
            </Link>
            <div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
              </button>
            </div>

            <div
              className="collapse navbar-collapse ml-auto"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav" id="moveright">
                <li className="nav-item active ">
                  <Link className="nav-link " aria-current="page" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutme">
                    About_Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Work_for_me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Services
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" href="#">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
