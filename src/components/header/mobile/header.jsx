import React from "react";
import SearchBar from "../../search-bar/search-bar";
import { useAuth } from "../../../contexts/auth-context";
import "./header.scss";

function Header() {
  const { currentUser, logout } = useAuth();
  async function handleLogout() {
    await logout();
  }

  return (
    <header className="header">
      <nav className="menuItems" role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/categories">
              <li>Categories</li>
            </a>
            {currentUser && (
              <a href="/orders">
                <li>Orders</li>
              </a>
            )}
            <a href="/cart">
              <li>Cart</li>
            </a>
            {currentUser ? (
              <a onClick={handleLogout}>
                <li>Log Out</li>
              </a>
            ) : (
              <a href="/log-in">
                <li>Log In</li>
              </a>
            )}
          </ul>
        </div>
        <span className="searchBar">
          <SearchBar />
        </span>
      </nav>
    </header>
  );
}

export default Header;
