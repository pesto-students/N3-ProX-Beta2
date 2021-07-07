import { useEffect, useState } from "react";
import app from "../shared/utility/firebase";

const useProducts = (category) => {
  const [loading, setLoading] = useState(!!category);
  const [error, setError] = useState();
  const [products, setProducts] = useState();

  useEffect(() => {
    if (category) {
      setLoading(true);
      const data = [];
      app
        .firestore()
        .collection("products")
        .where("itemCategory", "==", category)
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
  }, [category]);

  return { loading, error, products };
};

export default useProducts;
