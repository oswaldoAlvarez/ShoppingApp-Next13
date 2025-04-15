"use client";

import { useGetProducts } from "@/hooks";
import { Product } from "@/interfaces/hooks/products.interfaces";
import Image from "next/image";
import React from "react";

export const HomeComponent = () => {
  const { products } = useGetProducts();

  return (
    <div className="flex justify-center items-center">
      <div className="my-10 flex w-3/5 justify-center items-center flex-wrap">
        {products.products.map((item: Product) => (
          <div
            className="bg-gray-500 w-60 h-70 m-5 justify-center items-center flex rounded-2xl"
            key={item.id}
          >
            <div className="justify-center items-center flex flex-col">
              <div className="w-50 h-40 flex justify-center items-center">
                <Image
                  key={item.id}
                  src={item.images[0]}
                  width={80}
                  height={80}
                  alt={item.title}
                  priority={false}
                  //   fill
                  //   className="object-contain"
                />
              </div>
              <div className="flex justify-center flex-col w-50">
                <p className="">{item.title}</p>
                <p className="mb-2 text-xs">Category: {item.category}</p>
                <p className="font-bold text-xl">${item.price}</p>
              </div>
            </div>
          </div>
        ))}
        {/* <p>{JSON.stringify(products, 0, 4)}</p> */}
      </div>
    </div>
  );
};
