import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../contexts/cart-state-provider";
import "./product.scss";

function Product({ product, isInCart }) {
  const [, dispatch] = useStateValue();

  const addToCart = (e) => {
    e.preventDefault();
    //dispatch the item
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: product.itemID,
        title: product.itemName,
        image: product.image,
        price: product.itemPrice,
      },
    });
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.itemID}`}>
        <img src={product.image} alt="" />
      </Link>
      <div className="content">
        <h3>
          <Link to={`/product/${product.itemID}`}>{product.title}</Link>
        </h3>
        <span>₹{product.itemPrice}</span>
        <p>{product.itemName}</p>
        <div className="button-wrapper">
          <button className="card-button" disabled={isInCart} onClick={addToCart}>
            {isInCart ? "Added to cart" : "Add to cart"}
          </button>
          <button className="card-button" onClick={() => true}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
