import { Link } from "react-router-dom";
import useRandomProducts from "../../api/random-products-hook";
import Loader from "../../components/loader/loader";
import useIsDevice from "../../shared/utility/useIsDevice";
import deviceType from "../../shared/enums/device-list";
import "./bottom-products.scss";

function BottomProducts() {
  const { loading, products } = useRandomProducts();
  const isLaptop = useIsDevice(deviceType.LAPTOP);

  if (loading) {
    return <Loader />;
  }
  if (isLaptop && products?.length > 3) {
    products.pop();
  }

  return (
    <>
      <div className="category-wrapper">
        <span className="category-title">EXPLORE</span>
        <Link to="/categories">SEE ALL</Link>
        <div className={"products-items"}>
          {products?.map((product, index) => {
            return (
              <div className="product-card" key={index}>
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BottomProducts;
