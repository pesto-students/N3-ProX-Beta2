import { useState } from "react";
import app from "../shared/utility/firebase";

const useWishList = () => {
  const [loading, setLoading] = useState(false);

  const remove = (products, id) => {
    return products.filter(function (obj) {
      return obj.itemID !== id;
    });
  };

  const addWishList = async (userId, product) => {
    if (userId && product) {
      setLoading(true);
      const userRef = app.firestore().collection("wish_list").doc(userId);
      app
        .firestore()
        .runTransaction(async (transaction) => {
          return transaction.get(userRef).then((doc) => {
            if (!doc.data()?.products) {
              transaction.set(userRef, {
                products: [product],
              });
            } else {
              const products = doc.data()?.products;
              var isInArray =
                products.find(function (item) {
                  return item.itemID === product.itemID;
                }) !== undefined;
              if (!isInArray) {
                products.push(product);
                transaction.update(userRef, { products: products });
              }
            }
          });
        })
        .then(function () {
          console.log("Transaction successfully committed!");
          setLoading(false);
        })
        .catch(function (error) {
          console.log("Transaction failed: ", error);
          setLoading(false);
        });
    }
  };

  const removeFromList = async (userId, product) => {
    if (userId && product) {
      setLoading(true);
      const userRef = app.firestore().collection("wish_list").doc(userId);
      app
        .firestore()
        .runTransaction((transaction) => {
          return transaction.get(userRef).then((doc) => {
            let products = doc.data()?.products;
            products = remove(products, product.itemID);
            transaction.update(userRef, { products: products });
          });
        })
        .then(function () {
          console.log("Transaction successfully committed!");
          setLoading(false);
        })
        .catch(function (error) {
          console.log("Transaction failed: ", error);
          setLoading(false);
        });
    }
  };

  return { removeFromList, addWishList, loading };
};

export default useWishList;
