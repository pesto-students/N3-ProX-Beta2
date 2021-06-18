import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./styles/search-bar.scss";

function SearchBar() {
  return (
    <section className="wrapper">
      <input
        className="search"
        id="search"
        type="search"
        placeholder="Search Products"
        onChange={() => true}
        onFocus={() => true}
        onBlur={() => true}
        autoComplete="off"
      />
      <span className="searchIcon" onClick={() => true}>
        <FontAwesomeIcon icon={faSearch} />
      </span>
    </section>
  );
}

export default SearchBar;
