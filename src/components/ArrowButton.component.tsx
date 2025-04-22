"use client";

import { useRouter } from "next/navigation";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

type arrowTypeDirection = "left" | "right";

interface IArrowButton {
  id: number;
  type: arrowTypeDirection;
}

export const ArrowButton = ({ id, type }: IArrowButton) => {
  const router = useRouter();

  const goToProduct = (newId: number) => {
    router.push(`/home/product/${newId}`);
  };

  return (
    <button
      onClick={() => goToProduct(type === "left" ? id - 1 : id + 1)}
      className={`absolute ${
        type === "left" ? "left-0" : "right-0"
      } text-white text-3xl p-4 hover:text-blue-300 top-[50%]`}
    >
      {type === "left" ? <AiOutlineLeft /> : <AiOutlineRight />}
    </button>
  );
};
