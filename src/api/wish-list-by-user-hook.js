import { useEffect, useState } from "react";
import app from "../shared/utility/firebase";

const useWishListByUser = (id) => {
  const [loading, setLoading] = useState(!!id);
  const [error, setError] = useState();
  const [wishList, setWishList] = useState();

  useEffect(() => {
    if (id) {
      setLoading(true);
      app
        .firestore()
        .collection("wish_list")
        .doc(id)
        .get()
        .then((docRef) => {
          setWishList(docRef.data());
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [id]);

  let isWishListed = (item) => wishList?.products.some((product) => product["itemID"] === item.itemID);

  return { loading, error, wishList, isWishListed };
};

export default useWishListByUser;
