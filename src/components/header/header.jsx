import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faUserTie } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import SearchBar from "../search-bar/search-bar";
import useIsDevice from "../../shared/utility/useIsDevice";
import deviceType from "../../shared/enums/device-list";
import MobileHeader from "./mobile/header";
import { useAuth } from "../../contexts/auth-context";
import "./header.scss";

function Header() {
  const isMobile = useIsDevice(deviceType.MOBILE, deviceType.MOBILELARGE);
  const isTablet = useIsDevice(deviceType.TABLET);
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    await logout().then(() => history.push("/"));
  }

  return (
    <header className="header">
      {isMobile ? (
        <MobileHeader />
      ) : (
        <>
          <section className="header_section_wrapper">
            <nav>
              <Link to="/">
                <img alt="" className="header__logo" src={logo} />
              </Link>
            </nav>

            {!isTablet && (
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
            )}
          </section>

          <section className="header_section_wrapper">
            <div className="searchBar">
              <SearchBar />
            </div>

            <nav className="header__nav">
              <div className="header__option">
                <span>
                  <FontAwesomeIcon icon={faUserTie} size="lg" />
                </span>
                {currentUser ? (
                  <span className="header__optionLine" onClick={handleLogout}>
                    Log Out
                  </span>
                ) : (
                  <Link to={"/log-in"}>
                    <span className="header__optionLine">Sign In</span>
                  </Link>
                )}
              </div>
              <Link to="/">
                <div className="header__option">
                  <span>
                    <FontAwesomeIcon icon={faShoppingBag} size="lg" />
                  </span>
                  <span className="header__basketCount">1</span>
                  {!isTablet && <span className="header__optionLine">Cart</span>}
                </div>
              </Link>
            </nav>
          </section>
        </>
      )}
    </header>
  );
}

export default Header;
