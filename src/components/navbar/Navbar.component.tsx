import React from "react";
import { ActiveLink } from "../activeLink/ActiveLink.component";
import { AiFillHome } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded justify-between">
      <div className="items-center flex-row flex">
        <AiFillHome className="mr-2" />
        <ActiveLink path="/home" text="Home" />
      </div>
      <div className="items-center flex-row flex">
        <MdShoppingCart className="mr-2" />
        <ActiveLink path="/home/cart" text="Cart" />
      </div>
    </nav>
  );
};
