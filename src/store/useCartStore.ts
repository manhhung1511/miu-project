import { create } from "zustand";

type InitialState = {
  cart?: number;
};

const initialState: InitialState = {
  cart: 0,
};
interface CartState extends InitialState {
  handleCart: (cart: number) => void;
}

export const useCartStore = create<CartState>(set => ({
  ...initialState,
  handleCart: cart => set({cart}),
}));
