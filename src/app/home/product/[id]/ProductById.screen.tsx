"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useCartStore, useGetProductById, useGetProducts } from "@/hooks";
import { ProductData } from "@/interfaces/hooks/product.interfaces";
import { useRouter } from "next/navigation";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const ProductById = ({ id }: { id: number }) => {
  const router = useRouter();
  const { product } = useGetProductById(id);
  const { products } = useGetProducts();
  const { addToCart } = useCartStore();

  const [added, setAdded] = useState(false);

  const totalProducts = products.products.length;

  const handleAddToCart = (item: ProductData) => {
    if (added) return;

    addToCart(item);
    setAdded(true);

    setTimeout(() => setAdded(false), 2000);
  };

  const goToProduct = (newId: number) => {
    router.push(`/home/product/${newId}`);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {!product ? (
        <p className="text-white font-bold text-4xl">Loading products...</p>
      ) : (
        <div className="bg-gray-700 rounded-4xl w-300 h-150 justify-between items-center flex">
          {id > 1 && (
            <button
              onClick={() => goToProduct(id - 1)}
              className="absolute left-0 text-white text-3xl p-4 hover:text-blue-300"
            >
              <AiOutlineLeft />
            </button>
          )}
          <Image
            key={product.id}
            src={product.images[0]}
            width={400}
            height={400}
            alt={product.title}
            priority={false}
          />
          <div className="h-4/5 w-3/5 mr-15">
            <p className="mb-5 text-4xl">{product.title}</p>
            <p className="mb-5 text-gray-300 text-2xl font-bold">
              $ {product.price}
            </p>
            <p className="mb-5">Rate: {product.rating}</p>
            <p className="mb-5">{product.description}</p>
            <p className="mb-5">Category: {product.category}</p>
            <p className="mb-5">Available stock: {product.stock}</p>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={added}
              className={`mt-20 px-4 py-2 rounded text-white transition-all duration-200 ${
                added
                  ? "bg-green-500 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {added ? "✔️ Added" : "Add to cart"}
            </button>
          </div>
          {id < totalProducts && (
            <button
              onClick={() => goToProduct(id + 1)}
              className="absolute right-0 text-white text-3xl p-4 hover:text-blue-300"
            >
              <AiOutlineRight />
            </button>
          )}
        </div>
      )}
    </div>
  );
};
