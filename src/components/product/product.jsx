import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../contexts/cart-state-provider";
import Heart from "../heart-Icon/heart";
import { useAuth } from "../../contexts/auth-context";
import Star from "../star-Icon/star";
import "./product.scss";

function Product({ product, isInCart, filled = false, showWishList = true }) {
  const [, dispatch] = useStateValue();
  const { currentUser } = useAuth();

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
        description: product.description,
        quantity: 1,
        rating: product.rating,
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
        <div className="heart-wrapper">
          <div className="price-name-wrapper">
            <span>₹{product.itemPrice}</span>
            <p>{product.itemName}</p>
          </div>
          {showWishList && currentUser && <Heart product={product} filled={filled} />}
        </div>
        <div className="star-wrapper">
          <Star Rating={product.rating} />
        </div>
        <div className="button-wrapper">
          <button className="card-button" disabled={isInCart} onClick={addToCart}>
            {isInCart ? "Added to cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
