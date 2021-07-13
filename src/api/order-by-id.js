import { useEffect, useState } from "react";
import app from "../shared/utility/firebase";

const useOrderById = (id) => {
  const [loading, setLoading] = useState(!!id);
  const [error, setError] = useState();
  const [order, setOrder] = useState();

  useEffect(async () => {
    if (id) {
      setLoading(true);
      await app
        .firestore()
        .collection("order")
        .doc(id)
        .get()
        .then((docRef) => {
          setOrder(docRef.data());
          setError(undefined);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [id]);

  return { loading, error, order };
};

export default useOrderById;
