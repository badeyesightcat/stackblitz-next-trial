import React from "react";
import Link from "next/link";

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
  return (
    <ul className="flex flex-1 gap-4">
      {menus?.map((menu) => {
        return (
          <li key={menu.title}>
            <Link
              href={menu.path}
              className="px-3 pt-1 pb-4 leading-none hover:border-b-[--primary] hover:border-b-4 hover:text-[--primary]"
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
