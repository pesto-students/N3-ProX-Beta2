import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faUserTie, faTruckMoving, faHeart } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import SearchBar from "../search-bar/search-bar";
import useIsDevice from "../../shared/utility/useIsDevice";
import deviceType from "../../shared/enums/device-list";
import MobileHeader from "./mobile/header";
import { useAuth } from "../../contexts/auth-context";
import { useStateValue } from "../../contexts/cart-state-provider";
import "./header.scss";

function Header() {
  const [{ cart }] = useStateValue();
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
          </section>

          <section className="header_section_wrapper">
            <div className="searchBar">
              <SearchBar />
            </div>

            <nav className="header__nav">
              {currentUser && (
                <div className="header__option">
                  <span>
                    <FontAwesomeIcon icon={faTruckMoving} size="lg" />
                  </span>

                  {!isTablet && (
                    <span className="header__optionLine" onClick={() => history.push("/orders")}>
                      My Orders
                    </span>
                  )}
                </div>
              )}

              {currentUser && (
                <Link to="/wish">
                  <div className="header__option">
                    <span>
                      <FontAwesomeIcon icon={faHeart} size="lg" />
                    </span>
                    {!isTablet && <span className="header__optionLine">WishList</span>}
                  </div>
                </Link>
              )}

              <div className="header__option">
                <span>
                  <FontAwesomeIcon icon={faUserTie} size="lg" />
                </span>
                {currentUser && !isTablet ? (
                  <span className="header__optionLine" onClick={handleLogout}>
                    Log Out
                  </span>
                ) : (
                  !isTablet && (
                    <Link to={"/log-in"}>
                      <span className="header__optionLine">Sign In</span>
                    </Link>
                  )
                )}
              </div>

              <Link to="/cart">
                <div className="header__option">
                  <span>
                    <FontAwesomeIcon icon={faShoppingBag} size="lg" />
                  </span>
                  {!!cart?.length && <span className="header__basketCount">{cart?.length}</span>}
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
