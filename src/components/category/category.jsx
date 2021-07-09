import React from "react";
import { useHistory } from "react-router-dom";
import "./category.scss";

function Category({ imageSrc, name }) {
  const history = useHistory();
  const handleClick = () => {
    history.push({
      pathname: "/products",
      search: name,
    });
  };

  return (
    <div className="category-container">
      <div className="category-card">
        <img className="imgStyle" src={imageSrc} alt="img" />
        <h6 className="product-brand">{name}</h6>
      </div>
      <button className="cart-btn" onClick={handleClick}>
        VIEW ALL
      </button>
    </div>
  );
}

export default Category;
