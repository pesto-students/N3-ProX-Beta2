import { useEffect, useState } from "react";
import app from "../shared/utility/firebase";

const useOrderByUser = (id) => {
  const [loading, setLoading] = useState(!!id);
  const [error, setError] = useState();
  const [order, setOrder] = useState();

  useEffect(() => {
    if (id) {
      setLoading(true);
      const data = [];
      app
        .firestore()
        .collection("order")
        .where("uid", "==", id)
        .get()
        .then((docRef) => {
          if (docRef) {
            docRef.docs.forEach((item) => data.push(item));
            setError(undefined);
            setLoading(false);
          }
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
      setOrder(data);
    }
  }, [id]);

  return { loading, error, order };
};

export default useOrderByUser;
