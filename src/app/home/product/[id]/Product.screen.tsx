"use client";

import { useGetProductById } from "@/hooks";
import Image from "next/image";
import React from "react";

export const Product = ({ id }: { id: number }) => {
  const { product } = useGetProductById(id);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-700 rounded-4xl w-300 h-150 justify-between items-center flex">
        <Image
          key={product?.id}
          src={product?.images[0]}
          width={400}
          height={400}
          alt={product?.title}
          priority={false}
        />
        <div className="h-4/5 w-3/5 mr-15">
          <p className="mb-5 text-4xl">{product?.title}</p>
          <p className="mb-5 text-gray-300 text-2xl font-bold">$ {product?.price}</p>
          <p className="mb-5">Rate: {product?.rating}</p>
          <p className="mb-5">{product?.description}</p>
          <p className="mb-5">Category: {product?.category}</p>
          <p className="mb-5">Available stock: {product?.stock}</p>
        </div>
      </div>
    </div>
  );
};
