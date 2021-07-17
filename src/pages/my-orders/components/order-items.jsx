import React from "react";
import { useHistory } from "react-router-dom";

function OrderItems({ order }) {
  const history = useHistory();

  return (
    <>
      {order?.data().cart.map((product, index) => {
        return (
          <div key={index}>
            <li className="order-item">
              <div className="col left">
                <div className="order-thumbnail">
                  <a>
                    <img className="cart-img" src={product.image} alt={product.title} />
                  </a>
                </div>
                <div className="detail">
                  <div className="name">
                    <a href={`/product/${product.id}`}>{product.title}</a>
                  </div>
                  <div className="description">{product.description}</div>
                  <div className="price">₹{product.price}</div>
                  <button className="card-button order-button" onClick={() => history.push(`/orders/${order.id}`)}>
                    Track
                  </button>
                </div>
              </div>
            </li>
          </div>
        );
      })}
    </>
  );
}

export default OrderItems;
