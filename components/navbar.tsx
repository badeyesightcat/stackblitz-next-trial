import React from "react";
import Logo from "./logo";
import LogoutButton from "./logoutButton";
import Menus from "./menus";

const Navbar = () => {
  return (
    <nav className="flex gap-8 items-center">
      <Logo />
      <Menus />
      <LogoutButton />
    </nav>
  );
};

export default Navbar;
