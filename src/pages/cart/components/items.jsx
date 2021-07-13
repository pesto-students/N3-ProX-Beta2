import React, { useState } from "react";

function Item({ product, removeFromCart, updateCart }) {
  const [quantity, setQuantity] = useState(product.quantity);

  return (
    <>
      <li className="row">
        <div className="col left">
          <div className="thumbnail">
            <a href={`/product/${product.id}`}>
              <img className="cart-img" src={product.image} alt={product.title} />
            </a>
          </div>
          <div className="detail">
            <div className="name">
              <a href={`/product/${product.id}`}>{product.title}</a>
            </div>
            <div className="description">{product.description}</div>
            <div className="price">₹{product.price}</div>
          </div>
        </div>

        <div className="col right">
          <div className="quantity">
            <input
              type="number"
              min="0"
              step="1"
              className="quantity"
              value={quantity}
              onChange={(event) => {
                if (event.target.value > 0) {
                  setQuantity(event.target.value);
                  updateCart(product.id, event.target.value);
                }
              }}
            />
          </div>

          <div className="remove">
            <svg
              onClick={() => removeFromCart(product.id)}
              version="1.1"
              className="close"
              x="0px"
              y="0px"
              viewBox="0 0 60 60"
              enableBackground="new 0 0 60 60"
            >
              <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
            </svg>
          </div>
        </div>
      </li>
    </>
  );
}

export default Item;
