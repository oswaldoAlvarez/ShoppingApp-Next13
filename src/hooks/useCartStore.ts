import { create } from "zustand";
import { persist } from "zustand/middleware";
import { StateCreator } from "zustand";
import { ProductData } from "@/interfaces/hooks/product.interfaces";

export interface CartProduct extends ProductData {
  quantity: number;
}

interface CartStore {
  cart: CartProduct[];
  addToCart: (product: ProductData) => void;
  decreaseQuantity: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

const createCartSlice: StateCreator<CartStore> = (set, get) => ({
  cart: [],
  addToCart: (product: ProductData) => {
    const cart = get().cart;
    const exists = cart.find((itemProduct) => itemProduct.id === product.id);

    if (exists) {
      set({
        cart: cart.map((itemProduct) =>
          itemProduct.id === product.id
            ? { ...itemProduct, quantity: itemProduct.quantity + 1 }
            : itemProduct
        ),
      });
    } else {
      set({
        cart: [...cart, { ...product, quantity: 1 }],
      });
    }
  },
  decreaseQuantity: (productId: number) => {
    const cart = get().cart;
    set({
      cart: cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    });
  },
  removeFromCart: (productId: number) => {
    const cart = get().cart;
    set({
      cart: cart.filter(
        (itemProduct: ProductData) => itemProduct.id !== productId
      ),
    });
  },
  clearCart: () => set({ cart: [] }),
});

export const useCartStore = create<CartStore>()(
  persist(createCartSlice, {
    name: "cart-storage",
  })
);
