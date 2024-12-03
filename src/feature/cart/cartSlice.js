import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice -= item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getToatalCartItem = (state) => {
  const totalCartItem = state.cart.cart.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );
  return totalCartItem;
};

export const getTotalCartPrice = (state) => {
  const totalPrice = state.cart.cart.reduce(
    (sum, item) => sum + item.totalPrice,
    0,
  );
  return totalPrice;
};

export const getTotalQuantityOfPizza = (id) => (state) => {
  const item = state.cart.cart.find((item) => item.pizzaId === id);
  return item?.quantity ?? 0;
};
