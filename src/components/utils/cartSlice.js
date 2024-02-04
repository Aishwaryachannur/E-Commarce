import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "ttb",
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      const find = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find < 0) {
        state.items.push(action.payload);
      } else {
        state.items[find].quantity += 1;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    decreaseQuantity: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return {...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    }
  }
});
export const { addItem, clearCart, removeItem, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
