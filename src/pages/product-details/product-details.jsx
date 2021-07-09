import Loader from "../../components/loader/loader";
import useProductById from "../../api/product-by-id";
import { useStateValue } from "../../contexts/cart-state-provider";
import "./product-details.scss";

function ProductDetails(props) {
  const id = props.match.params.id;
  const { loading, product } = useProductById(id);
  const [, dispatch] = useStateValue();

  if (loading) {
    return <Loader />;
  }

  const addToCart = () => {
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
    <div className="details" key={product.itemID}>
      <img src={product.image} alt="" />
      <div className="box">
        <div className="row">
          <h2>{product.itemName}</h2>
          <span>₹{product.itemPrice}</span>
        </div>
        <p>{product.description}</p>
        <button className="card-button" onClick={addToCart}>
          Add to cart
        </button>
        <button className="card-button" onClick={() => true}>
          Buy
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
