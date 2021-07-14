import React from "react";
import useProducts from "../../api/products-hook";
import { useStateValue } from "../../contexts/cart-state-provider";
import Loader from "../../components/loader/loader";
import useWishListByUser from "../../api/wish-list-by-user-hook";
import { useAuth } from "../../contexts/auth-context";
import Product from "../../components/product/product";
import "./categories.scss";

function Categories() {
  const { loading, products } = useProducts("", true);
  const [{ cart }] = useStateValue();
  const { currentUser } = useAuth();
  const { isWishListed, loading: loadingProduct } = useWishListByUser(currentUser?.uid);

  const isInCart = (product) => {
    let disabled = false;
    cart.map((item) => {
      if (item.id === product.itemID) {
        disabled = true;
      }
    });
    return disabled;
  };

  if (loading || loadingProduct) {
    return <Loader />;
  }

  return (
    <section>
      <h1 className="title">EXPLORE</h1>
      <span className="category-items"></span>
      <div className={"products-items"}>
        {products.map((product, index) => {
          const filled = isWishListed(product);
          return <Product product={product} key={index} isInCart={isInCart(product)} filled={filled} />;
        })}
      </div>
    </section>
  );
}

export default Categories;
