import { useEffect, useState } from "react";
import app from "../shared/utility/firebase";

const useWishListByProduct = (item) => {
  const [loading, setLoading] = useState(!!item);
  const [error, setError] = useState();
  const [products, setProducts] = useState();

  useEffect(() => {
    if (item) {
      setLoading(true);
      const data = [];
      app
        .firestore()
        .collection("products")
        .where("itemID" in item)
        .get()
        .then((docRef) => {
          if (docRef) {
            docRef.docs.forEach((item) => data.push(item.data()));
            setProducts(data);
            setError(undefined);
            setLoading(false);
          }
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [item]);

  return { loading, error, products };
};

export default useWishListByProduct;
