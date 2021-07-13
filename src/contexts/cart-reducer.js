/* eslint-disable no-case-declarations */
// Selector

const savedCartItem = localStorage.getItem("cart");

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = [...state.cart, action.item];
      localStorage.setItem("cart", JSON.stringify(item));
      return {
        ...state,
        cart: item,
      };

    case "EMPTY_CART":
      localStorage.removeItem("cart");
      return {
        ...state,
        cart: [],
      };

    case "UPDATE_QUANTITY":
      const updateIndex = state.cart.findIndex((cartItem) => cartItem.id === action.id);
      if (state.cart[updateIndex]) {
        state.cart[updateIndex].quantity = action.quantity;
      }
      localStorage.setItem("cart", JSON.stringify([...state.cart]));
      return {
        ...state,
        cart: [...state.cart],
      };

    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);
      let newBasket = [...state.cart];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product (id: ${action.id}) as its not in cart!`);
      }
      localStorage.setItem("cart", JSON.stringify(newBasket));
      return {
        ...state,
        cart: newBasket,
      };

    case "ADD_ADDRESS":
      return {
        ...state,
        address: action.address,
      };

    default:
      return state;
  }
};

export const initialState = {
  cart: savedCartItem ? [...JSON.parse(savedCartItem)] : [],
  user: null,
};

export default reducer;
