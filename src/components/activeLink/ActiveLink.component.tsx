"use client";

import Link from "next/link";

interface IActiveLink {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: IActiveLink) => {
  return (
    <Link className={`mr-2 transition-all hover:text-blue-200`} href={path}>
      {text}
    </Link>
  );
};
