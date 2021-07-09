import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import app from "../../shared/utility/firebase";
import debounce from "../../shared/utility/debounce";
import "./search-bar.scss";

function SearchBar() {
  const [searchData, setSearchData] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchData([]);
    const data = [];
    if (value) {
      app
        .firestore()
        .collection("products")
        .where("itemCategory", "in", ["men", "women", "kids"])
        .where("itemName", ">=", value)
        .where("itemName", "<=", value + "\uf8ff")
        .get()
        .then((docRef) => {
          if (docRef) {
            docRef.docs.forEach((item) => data.push(item.data()));
          }
          if (data.length == 0) {
            data.push({ image: "", itemName: "No Results found, Please try another word." });
          }
          setSearchData(data);
        });
    }
  };
  const optimizedHandler = useCallback(debounce(handleChange), []);

  return (
    <>
      <div className="wrapper">
        <input
          className="search"
          id="search"
          type="search"
          placeholder="Search for products"
          autoComplete="off"
          onChange={optimizedHandler}
        />
        <span className="searchIcon" onClick={() => true}>
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
      <div className="autocomplete-dropdown">
        <ul className="autocomplete-search-results-list">
          {searchData?.map((item, index) => (
            <Link key={index} to={`/product/${item.itemID}`}>
              <li className="autocomplete-search-result">
                <img className="search-image" src={item.image} alt="" />
                {item.itemName}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SearchBar;
