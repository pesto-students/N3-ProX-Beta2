import { Link } from "react-router-dom";
import useRecommendProducts from "../../api/recommended-products-hook";
import Loader from "../../components/loader/loader";
import useIsDevice from "../../shared/utility/useIsDevice";
import deviceType from "../../shared/enums/device-list";
import "./recommended.scss";

function Recommended() {
  const recommended = localStorage.getItem("recommended");
  const { loading, selected } = useRecommendProducts(recommended);
  const isLaptop = useIsDevice(deviceType.LAPTOP);

  if (loading) {
    return <Loader />;
  }

  if (isLaptop && selected?.length > 3) {
    selected.pop();
  }

  return (
    <>
      {recommended ? (
        <div className="category-wrapper">
          <span className="category-title">RECOMMENDED FOR YOU</span>
          <Link to="/categories">SEE ALL</Link>
          <div className={"products-items"}>
            {selected?.map((product, index) => {
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
      ) : (
        <></>
      )}
    </>
  );
}

export default Recommended;
