import React from "react";
import Logo from "./logo";
import Menus from "./menus";

const Navbar = () => {
  return (
    <header className="bg-[--light]">
      <nav className="container mx-auto flex items-center justify-between">
        <Logo />
        <Menus />
      </nav>
    </header>
  );
};

export default Navbar;
