import { useEffect, useState } from "react";
import app from "../shared/utility/firebase";

const useRandomProducts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [products, setProducts] = useState();

  useEffect(async () => {
    setLoading(true);
    const data = [];
    const index = [];
    const number = 20;
    for (var i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * number) + 1;
      index.push(randomIndex.toString());
    }

    await app
      .firestore()
      .collection("products")
      .where("itemID", "in", index)
      .get()
      .then((docRef) => {
        docRef.docs.forEach((item) => data.push(item.data()));
        setError(undefined);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    setLoading(false);
    setProducts(data);
  }, []);

  return { loading, error, products };
};

export default useRandomProducts;
