"use client";

import React from "react";
import Image from "next/image";
import { useCartStore } from "@/hooks";
import { CartProduct } from "@/hooks/useCartStore";
import { FaTrash } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";

interface IRowProductCart {
  product: CartProduct;
}

export const RowProductCart = ({ product }: IRowProductCart) => {
  const { addToCart, decreaseQuantity, removeFromCart } = useCartStore();

  const maxReached = product.quantity >= product.stock;
  const belowMinimum = product.quantity < product.minimumOrderQuantity;

  return (
    <li
      key={product.id}
      className="mb-4 border-b pb-4 flex items-center space-x-4"
    >
      <Link
        href={`/home/product/${product.id}`}
        className="w-20 h-20 bg-gray-200 overflow-hidden rounded-2xl flex items-center justify-center"
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={80}
          height={80}
          className="object-contain bg-white"
        />
      </Link>
      <div className="flex-1">
        <p className="text-lg font-semibold">{product.title}</p>
        <p className="text-sm text-gray-400">Quantity: {product.quantity}</p>
        <p className="text-sm text-gray-400">
          Total: ${(product.price * product.quantity).toFixed(2)}
        </p>
        <p className="text-sm text-gray-400">
          Available stock: {product.stock}
        </p>
        {maxReached && (
          <p className="text-xs text-red-500">Maximum stock reached</p>
        )}
        {belowMinimum && (
          <p className="text-xs text-red-500">
            You must buy at least {product.minimumOrderQuantity} units
          </p>
        )}
      </div>
      <div className="flex space-x-2">
        <button
          className={`px-3 py-1 rounded text-black text-xl ${
            maxReached
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          onClick={() => !maxReached && addToCart(product)}
          disabled={maxReached}
        >
          <AiOutlinePlus size={20} />
        </button>

        {product.quantity > 1 ? (
          <button
            className="bg-red-500 text-black px-3 py-1 text-3xl rounded hover:bg-red-600"
            onClick={() => decreaseQuantity(product.id)}
          >
            <AiOutlineMinus size={20} />
          </button>
        ) : (
          <button
            className="bg-red-700 text-black px-3 py-1 rounded hover:bg-red-800"
            onClick={() => removeFromCart(product.id)}
          >
            <FaTrash />
          </button>
        )}
      </div>
    </li>
  );
};
