import React from "react";
import Logo from "./logo";
import Menus from "./menus";

const Navbar = () => {
  return (
    <nav className="flex gap-8 items-center justify-between">
      <Logo />
      <Menus />
    </nav>
  );
};

export default Navbar;
