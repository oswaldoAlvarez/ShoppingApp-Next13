"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface IActiveLink {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: IActiveLink) => {
  const pathname = usePathname();

  return (
    <Link
      className={`mr-2 transition-all hover:underline hover:text-blue-400 ${
        pathname === path ? "text-blue-500" : ""
      }`}
      href={path}
    >
      {text}
    </Link>
  );
};
