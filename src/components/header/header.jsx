import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./header.scss";
import SearchBar from "../search-bar/search-bar";
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

      <menu>
        <nav className="menu_items">
          <Link to="/">
            <span className="header__optionLine">MEN</span>
          </Link>
          <Link to="/">
            <span className="header__optionLine">WOMEN</span>
          </Link>
          <Link to="/">
            <span className="header__optionLine">KIDS</span>
          </Link>
        </nav>
      </menu>

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
