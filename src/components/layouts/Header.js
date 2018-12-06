import React from "react";
import PropTypes from "prop-types";

const Header = ({ branding }) => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <h4>{branding}</h4>
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact/add" className="nav-link">
                Add
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = { branding: "My App" };

Header.propTypes = { branding: PropTypes.string.isRequired };

export default Header;
