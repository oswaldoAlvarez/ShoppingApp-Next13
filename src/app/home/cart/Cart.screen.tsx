"use client";

import { RowProductCart } from "@/components";
import { useCartStore } from "@/hooks";
import { MdShoppingCart } from "react-icons/md";

export const Cart = () => {
  const cart = useCartStore((state) => state.cart);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-8 flex flex-col min-h-screen">
      <div className="flex items-center mb-6">
        <MdShoppingCart className="mr-2 text-3xl" />
        <h1 className="text-2xl font-bold">Cart</h1>
      </div>
      {cart.length === 0 ? (
        <p className="text-gray-500">Cart empty.</p>
      ) : (
        <>
          <ul className="flex-grow">
            {cart.map((item) => (
              <RowProductCart key={item.id} product={item} />
            ))}
          </ul>
          <div className="mt-8 flex justify-end items-center gap-4">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg">
              Buy
            </button>
          </div>
        </>
      )}
    </div>
  );
};
