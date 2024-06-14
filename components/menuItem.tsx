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
    <li>
      <Link
        href={path}
        className={classNames(
          "box-border px-3 pt-1 pb-4 leading-none hover:border-b-[--dark] hover:border-b-4 hover:text-[--dark]",
          pathname === path
            ? "bg-[--dark] text-white border-b-[--dark] hover:border-none hover:text-white focus:text-white"
            : ""
        )}
      >
        {title}
      </Link>
    </li>
  );
};

export default MenuItem;
