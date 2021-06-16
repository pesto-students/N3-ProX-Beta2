import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import "./styles/header.scss";
import SearchBar from "./search-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faUserTie } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/">
          <img alt="" className="header__logo" src={logo} />
        </Link>
      </nav>

      <SearchBar />

      <nav className="header__nav">
        <Link to={"/"}>
          <div className="header__option">
            <span>
              <FontAwesomeIcon icon={faUserTie} size="2x" />
            </span>
            <span className="header__optionLine">Sign-In</span>
          </div>
        </Link>
        <Link to="/">
          <div className="header__option">
            <span>
              <FontAwesomeIcon icon={faShoppingBag} size="2x" />
            </span>
            <span className="header__basketCount">1</span>
            <span className="header__optionLine">Cart</span>
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
