import { useEffect, useState } from "react";
import app from "../shared/utility/firebase";

const useRecommendProducts = (recommended) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [products, setProducts] = useState();

  useEffect(async () => {
    if (recommended) {
      setLoading(true);
      const data = [];

      await app
        .firestore()
        .collection("products")
        .where("itemCategory", "==", JSON.parse(recommended))
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
    }
    setLoading(false);
  }, []);

  // Shuffle array
  const shuffled = products?.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  let selected = shuffled?.slice(0, 4);
  console.log(products);
  return { loading, error, selected };
};

export default useRecommendProducts;
