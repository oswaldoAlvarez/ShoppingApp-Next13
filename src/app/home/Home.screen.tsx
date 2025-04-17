"use client";

import React from "react";
import { ProductCard } from "@/components";
import { useGetProducts } from "@/hooks";

export const HomeComponent = () => {
  const { products } = useGetProducts();

  return (
    <div className="flex justify-center items-center">
      <div className="my-10 flex w-3/5 justify-center items-center flex-wrap">
        {products.products.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
