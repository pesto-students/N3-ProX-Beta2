import { useEffect, useState } from "react";
import app from "../shared/utility/firebase";

const useProductById = (id) => {
  const [loading, setLoading] = useState(!!id);
  const [error, setError] = useState();
  const [product, setProduct] = useState();

  useEffect(() => {
    if (id) {
      setLoading(true);
      app
        .firestore()
        .collection("products")
        .where("itemID", "==", id)
        .get()
        .then((docRef) => {
          if (docRef) {
            docRef.docs.forEach((item) => setProduct(item.data()));
            setError(undefined);
            setLoading(false);
          }
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [id]);

  return { loading, error, product };
};

export default useProductById;
