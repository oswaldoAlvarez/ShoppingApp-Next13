"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useCartStore, useGetProductById, useGetProducts } from "@/hooks";
import { ProductData } from "@/interfaces/hooks/product.interfaces";
import { AiFillStar } from "react-icons/ai";
import { ArrowButton } from "@/components";

interface IProductById {
  id: number;
}

export const ProductById = ({ id }: IProductById) => {
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

  return (
    <div className="flex items-center justify-center h-screen">
      {!product ? (
        <p className="text-white font-bold text-4xl">Loading products...</p>
      ) : (
        <div className="bg-gray-700 rounded-4xl mt-150 md:mt-0 mx-10 md:w-300 md:h-170 justify-between items-center flex flex-col md:flex-row">
          {id > 1 && <ArrowButton id={id} type="left" />}
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
            <div className="flex items-center mb-5">
              <AiFillStar className="text-yellow-400 mr-1" size={20} />
              <p>Rate: {product.rating}</p>
              <div className="mx-2">|</div>
              <p>Customer reviews: {product.reviews.length}</p>
            </div>
            <p className="mb-5">{product.description}</p>
            <p className="mb-5">Category: {product.category}</p>
            <p className="mb-5">SKU: {product.sku}</p>
            <p className="mb-5">Available stock: {product.stock}</p>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={added}
              className={`my-20 md:mt-20 px-4 py-2 rounded text-white transition-all duration-200 ${
                added
                  ? "bg-green-500 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {added ? "✔️ Added" : "Add to cart"}
            </button>
          </div>
          {id < totalProducts && <ArrowButton id={id} type="right" />}
        </div>
      )}
    </div>
  );
};
