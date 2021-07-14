import React, { useContext } from "react";
import useWishList from "../api/wish-list-hook";

const WishContext = React.createContext();

export function useWish() {
  return useContext(WishContext);
}

export function WishProvider({ children }) {
  const { addWishList, removeFromList, loading } = useWishList();

  async function add(userId, product) {
    await addWishList(userId, product);
  }

  async function remove(userId, product) {
    await removeFromList(userId, product);
  }

  const value = {
    add,
    remove,
    loading,
  };

  return <WishContext.Provider value={value}>{children}</WishContext.Provider>;
}
