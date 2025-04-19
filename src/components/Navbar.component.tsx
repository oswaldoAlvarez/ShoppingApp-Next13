"use client";

import React from "react";
import { ActiveLink } from "./ActiveLink.component";
import { AiFillHome } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";
import { useCartStore } from "@/hooks";

export const Navbar = () => {
  const cart = useCartStore((state) => state.cart);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded justify-between">
      <div className="items-center flex-row flex">
        <AiFillHome className="mr-2" />
        <ActiveLink path="/home" text="Home" />
      </div>
      <div className="items-center flex-row flex">
        <MdShoppingCart className="mr-2" />
        <ActiveLink path="/home/cart" text="Cart" />
        {totalItems > 0 && (
          <span className="bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </div>
    </nav>
  );
};
