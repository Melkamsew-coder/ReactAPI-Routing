import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../../commonResource/images/icons/logo-sm.png"; // importing the images as modules
import searchIcon from "../../commonResource/images/icons/search-icon-sm.png";
import cartIcon from "../../commonResource/images/icons/cart-sm.png";

const Header = () => {
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>
          <Link className="navbar-brand mx-auto" to="/">
            <img src={logo} alt="Apple Logo" />
          </Link>
          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item">
                <Link className="nav-link" to="/mac">
                  Mac
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/iphone">
                  iPhone
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ipad">
                  iPad
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/watch">
                  Watch
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tv">
                  TV
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/music">
                  Music
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search">
                  <img src={searchIcon} alt="Search" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <img src={cartIcon} alt="Cart" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
