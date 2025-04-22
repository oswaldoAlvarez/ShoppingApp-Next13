import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductData } from "@/interfaces/hooks/product.interfaces";

interface IProductCard {
  item: ProductData;
}

export const ProductCard = ({ item }: IProductCard) => {
  return (
    <Link
      href={`/home/product/${item.id}`}
      className="bg-gray-500 w-60 h-80 m-5 justify-center items-center flex rounded-2xl"
      key={item.id}
    >
      <div className="justify-center items-center flex flex-col">
        <div className="md:w-50 w-40 h-40 flex justify-center items-center bg-gray-300 rounded-3xl mb-3">
          <Image
            key={item.id}
            src={item.images[0]}
            width={80}
            height={80}
            alt={item.title}
            priority={false}
          />
        </div>
        <div className="flex justify-center flex-col md:w-50 w-40">
          <p className="">{item.title}</p>
          <p className="mb-2 text-xs">Category: {item.category}</p>
          <p className="font-bold text-xl">${item.price}</p>
        </div>
      </div>
    </Link>
  );
};
