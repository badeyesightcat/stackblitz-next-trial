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
  const isAdmin = false;

  return (
    <>
      <div className="flex">
        <ul className="flex flex-1 gap-4">
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
          <li>
            <SessionButton session={session} />
          </li>
        </ul>
      </div>
      <div className={classNames(openMobileMenu ? "block" : "hidden")}>
        <button type="button">menu</button>
        <ul className="flex flex-1 gap-4">
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
          <li>
            <SessionButton session={session} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menus;
