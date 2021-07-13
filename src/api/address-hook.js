import { useEffect, useState } from "react";
import app from "../shared/utility/firebase";

const useAddress = (id) => {
  const [loading, setLoading] = useState(!!id);
  const [error, setError] = useState();
  const [defaultAddress, setDefaultAddress] = useState();

  useEffect(() => {
    if (id) {
      setLoading(true);
      app
        .firestore()
        .collection("address")
        .where("id", "==", id)
        .get()
        .then((docRef) => {
          if (docRef) {
            docRef.docs.forEach((item) => setDefaultAddress(item.data()));
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

  return { loading, error, defaultAddress };
};

export default useAddress;
