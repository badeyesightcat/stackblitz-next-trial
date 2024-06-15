"use client";

import React, { useState } from "react";
import classNames from "classnames";
import MenuItem from "./menuItem";
import SessionButton from "./sessionButton";

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
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  // temporary
  const session = true;
  const isAdmin = true;

  return (
    <>
      <div
        className={classNames(
          "absolute bg-[--light] min-h-[40vh] left-0 w-full flex items-center px-5 justify-center z-10",
          "lg:static lg:min-h-fit lg:bg-transparent lg:w-auto",
          openMobileMenu
            ? "top-[5.25rem] duration-300"
            : "top-[-100%] duration-500"
        )}
      >
        <ul className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-10">
          {menus?.map((menu) => (
            <MenuItem
              key={menu.title}
              title={menu.title}
              path={menu.path}
            />
          ))}
          {session && isAdmin && (
            <MenuItem
              title="Admin"
              path="/admin"
            />
          )}
          <li className="flex justify-center">
            <SessionButton session={session} />
          </li>
        </ul>
      </div>
      <button
        className="lg:hidden"
        type="button"
        onClick={() => setOpenMobileMenu((open) => !open)}
      >
        {openMobileMenu ? "close" : "menu"}
      </button>
    </>
  );
};

export default Menus;
