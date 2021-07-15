import React from "react";
import Loader from "../../components/loader/loader";
import useProductById from "../../api/product-by-id-hook";
import { useStateValue } from "../../contexts/cart-state-provider";
import Star from "../../components/star-Icon/star";
import Heart from "../../components/heart-Icon/heart";
import useWishListByUser from "../../api/wish-list-by-user-hook";
import { useAuth } from "../../contexts/auth-context";
import BottomProducts from "../../components/bottom-products/bottom-products";
import Recommended from "../../components/recommended/recommended";
import "./product-details.scss";

function ProductDetails(props) {
  const id = props.match.params.id;
  const { loading, product } = useProductById(id);
  const [{ cart }, dispatch] = useStateValue();
  const { currentUser } = useAuth();
  const { isWishListed, loading: loadingProduct } = useWishListByUser(currentUser?.uid);

  if (loading || loadingProduct) {
    return <Loader />;
  }

  localStorage.setItem("recommended", JSON.stringify(product?.itemCategory));

  const isInCart = () => {
    let disabled = false;
    cart.map((item) => {
      if (item.id === id) {
        disabled = true;
      }
    });
    return disabled;
  };

  const addToCart = () => {
    //dispatch the item
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: product.itemID,
        title: product.itemName,
        image: product.image,
        price: product.itemPrice,
        quantity: 1,
      },
    });
  };

  const inCart = isInCart();

  const filled = isWishListed(product);
  return (
    <>
      <div className="details" key={product.itemID}>
        <img src={product.image} alt="" />
        <div className="box">
          <div className="row">
            <h2>{product.itemName}</h2>
            <Star Rating={product.rating} />
          </div>
          <div className="price-name-details-wrapper">
            <h2>₹{product.itemPrice}</h2>
            {currentUser && <Heart product={product} filled={filled} />}
          </div>
          <p>{product.description}</p>
          <button className="card-button" disabled={inCart} onClick={addToCart}>
            {inCart ? "Added to cart" : "Add to cart"}
          </button>
        </div>
      </div>
      <BottomProducts />
      <Recommended />
    </>
  );
}

export default ProductDetails;
