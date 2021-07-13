import { useState } from "react";
import app from "../shared/utility/firebase";

const useOder = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const createDefaultAddress = (address) => {
    setLoading(true);
    app
      .firestore()
      .collection("address")
      .add(address)
      .then((docRef) => {
        if (docRef) {
          setError(undefined);
          setLoading(false);
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const createOrder = (order, uid) => {
    setLoading(true);
    app
      .firestore()
      .collection("order")
      .add(order)
      .then((docRef) => {
        if (docRef) {
          setError(undefined);
          setLoading(false);
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    if (order.address.isDefaultAddress) {
      createDefaultAddress(order.address, uid);
    }
  };

  return { loading, error, createOrder, createDefaultAddress };
};

export default useOder;
