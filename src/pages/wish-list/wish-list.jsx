import React from "react";
import Loader from "../../components/loader/loader";
import useWishListByUser from "../../api/wish-list-by-user-hook";
import { useAuth } from "../../contexts/auth-context";
import { useWish } from "../../contexts/wish-list-context";
import { useStateValue } from "../../contexts/cart-state-provider";
import Product from "../../components/product/product";
import "./wish-list.scss";

function WishList() {
  const { currentUser } = useAuth();
  const [{ cart }] = useStateValue();
  const { wishList, loading } = useWishListByUser(currentUser.uid);
  const { loading: loadingHandler } = useWish();

  if (loading || loadingHandler) {
    return <Loader />;
  }

  if (!wishList || wishList?.products?.length === 0) {
    return <div className="no-item">No Item in your wish List</div>;
  }

  const isInCart = (product) => {
    let disabled = false;
    cart.map((item) => {
      if (item.id === product.itemID) {
        disabled = true;
      }
    });
    return disabled;
  };

  return (
    <>
      <h1 className="title">Wish List</h1>
      <section className="my-wish-list">
        {wishList?.products.map((product, index) => {
          return <Product product={product} key={index} isInCart={isInCart(product)} showWishList={false} />;
        })}
      </section>
    </>
  );
}

export default WishList;
