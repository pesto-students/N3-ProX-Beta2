import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Item from "./components/items";
import { useStateValue } from "../../contexts/cart-state-provider";
import Checkout from "./components/checkout/checkout";
import { useAuth } from "../../contexts/auth-context";
import Total from "./components/total";
import SignInModel from "./components/checkout/sign-in-model";
import useAddress from "../../api/address-hook";
import { OrderProvider } from "../../contexts/order-context";
import Loader from "../../components/loader/loader";
import "./cart.scss";

function Cart() {
  const savedItems = localStorage.getItem("cart");
  const products = savedItems && [...JSON.parse(savedItems)];
  const history = useHistory();
  const [, dispatch] = useStateValue();
  const [modalOpen, setModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const { currentUser } = useAuth();
  const { loading, defaultAddress } = useAddress(currentUser?.uid);

  if (loading) {
    return <Loader />;
  }

  if (!savedItems || products.length == 0) {
    return (
      <div className="empty-product">
        <h3>There are no products in your cart.</h3>
        <button className="card-button checkout" onClick={() => history.push("/")}>
          Shop Now
        </button>
      </div>
    );
  }

  const removeFromCart = (id) => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  const updateCart = (id, quantity) => {
    // remove the item from the basket
    dispatch({
      type: "UPDATE_QUANTITY",
      id: id,
      quantity: quantity,
    });
  };

  const subTotal = products.reduce((total, product) => {
    return total + product.price * +product.quantity;
  }, 0);

  const discountValue = 10;

  const discount = (subTotal * discountValue) / 100;

  const tax = 5;
  const total = subTotal - discount + tax;

  return (
    <OrderProvider>
      {modalOpen && <Checkout setOpenModal={setModalOpen} defaultAddress={defaultAddress} total={total} />}
      {signInModalOpen && <SignInModel setOpenModal={setSignInModalOpen} />}
      <h1 className="title">CART</h1>
      <div>
        <section className="cart-wrapper">
          <ul className="products">
            {products.map((product, index) => {
              return <Item key={index} product={product} removeFromCart={removeFromCart} updateCart={updateCart} />;
            })}
          </ul>
          <Total total={total} subTotal={subTotal} discount={discount} tax={tax} />
          {currentUser ? (
            <button
              className="card-button checkout"
              type="button"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Check Out
            </button>
          ) : (
            <button
              className="card-button checkout"
              type="button"
              onClick={() => {
                setSignInModalOpen(true);
              }}
            >
              Sign in to place order
            </button>
          )}
        </section>
        <div className="checkout"></div>
      </div>
    </OrderProvider>
  );
}

export default Cart;
