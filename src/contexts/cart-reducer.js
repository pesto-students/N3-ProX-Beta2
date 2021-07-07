// Selector
export const getBasketTotal = (cart) => cart?.reduce((amount, item) => item.price + amount, 0);

const savedCartItem = localStorage.getItem("cart");

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // eslint-disable-next-line no-case-declarations
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

    case "REMOVE_FROM_CART":
      // eslint-disable-next-line no-case-declarations
      const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);
      // eslint-disable-next-line no-case-declarations
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

    case "SET_USER":
      return {
        ...state,
        user: action.user,
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
