import Loader from "../../components/loader/loader";
import useProductById from "../../api/product-by-id-hook";
import { useStateValue } from "../../contexts/cart-state-provider";
import "./product-details.scss";

function ProductDetails(props) {
  const id = props.match.params.id;
  const { loading, product } = useProductById(id);
  const [{ cart }, dispatch] = useStateValue();

  if (loading) {
    return <Loader />;
  }

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
  return (
    <div className="details" key={product.itemID}>
      <img src={product.image} alt="" />
      <div className="box">
        <div className="row">
          <h2>{product.itemName}</h2>
          <span>₹{product.itemPrice}</span>
        </div>
        <p>{product.description}</p>
        <button className="card-button" disabled={inCart} onClick={addToCart}>
          {inCart ? "Added to cart" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
