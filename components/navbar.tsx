import React from "react";
import Logo from "./Logo";
import Menus from "./Menus";

const Navbar = () => {
  return (
    <header className="bg-[--light]">
      <nav className="flex items-center justify-between">
        <Logo />
        <Menus />
      </nav>
    </header>
  );
};

export default Navbar;
