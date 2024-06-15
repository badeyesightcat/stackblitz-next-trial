"use client";

import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

interface MenuProp {
  title: string;
  path: string;
}

const MenuItem = ({ title, path }: MenuProp) => {
  const pathname = usePathname();
  return (
    <li className="flex justify-center">
      <Link
        href={path}
        className={classNames(
          "box-border px-2 py-4 leading-none",
          "hover:text-white",
          pathname === path
            ? "border-y-[--dark] border-y-4 text-[--dark] hover:text-[--dark] focus:text-[--dark]"
            : ""
        )}
      >
        {title}
      </Link>
    </li>
  );
};

export default MenuItem;
