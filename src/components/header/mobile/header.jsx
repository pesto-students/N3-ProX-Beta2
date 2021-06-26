import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../../search-bar/search-bar";
import "./header.scss";

function Header() {
  return (
    <header className="header">
      <nav className="menuItems" role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Info</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <span className="searchBar">
          <SearchBar />
        </span>
        <Link to="/">
          <div className="cart">
            <span>
              <FontAwesomeIcon icon={faShoppingBag} size="lg" />
            </span>
            <span className="header__basketCount">1</span>
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
