"use client";

import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const menus = [
  {
    title: "Issue Board",
    path: "/issue-board",
  },
  {
    title: "Profile",
    path: "/profile",
  },
];

const Menus = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-1 gap-4">
      {menus?.map((menu) => {
        return (
          <li key={menu.title}>
            <Link
              href={menu.path}
              className={classNames(
                "box-border px-3 pt-1 pb-4 leading-none hover:border-b-[--dark] hover:border-b-4 hover:text-[--dark]",
                pathname === menu.path
                  ? "bg-[--dark] text-white border-b-[--dark] hover:border-none hover:text-white focus:text-white"
                  : ""
              )}
            >
              {menu.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menus;
