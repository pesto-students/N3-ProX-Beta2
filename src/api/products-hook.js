import { useEffect, useState } from "react";
import app from "../shared/utility/firebase";

const useProducts = (category = "", all = false) => {
  const [loading, setLoading] = useState(!!category);
  const [error, setError] = useState();
  const [products, setProducts] = useState();

  useEffect(() => {
    const data = [];
    if (all) {
      setLoading(true);
      app
        .firestore()
        .collection("products")
        .get()
        .then((docRef) => {
          if (docRef) {
            docRef.docs.forEach((item) => {
              data.push(item.data());
            });
            setProducts(data);
            setError(undefined);
            setLoading(false);
          }
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    } else {
      if (category) {
        setLoading(true);
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
    }
  }, [category]);

  return { loading, error, products };
};

export default useProducts;
