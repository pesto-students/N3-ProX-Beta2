import React from "react";
import Loader from "../../components/loader/loader";
import useProducts from "../../api/products-hook";
import Product from "../../components/product/product";
import { useStateValue } from "../../contexts/cart-state-provider";
import "./product-list.scss";

function ProductList(props) {
  const category = props.location.search.substring(1);
  const { loading, products } = useProducts(category);
  const [{ cart }] = useStateValue();

  if (loading) {
    return <Loader />;
  }

  if (!products.length) {
    return <div className="wrap">Not Available Yet</div>;
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
      <h1 className="title">{category}</h1>
      <div className={"products-items"}>
        {products.map((product, index) => {
          return <Product product={product} key={index} isInCart={isInCart(product)} />;
        })}
      </div>
    </>
  );
}

export default ProductList;
