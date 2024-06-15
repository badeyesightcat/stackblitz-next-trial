import React from "react";
import Logo from "./logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container mx-auto flex justify-between items-center">
      <Logo footer={true} />
      <p className="flex gap-8">
        <Link
          className="underline"
          href={"https://github.com/badeyesightcat"}
        >
          Github
        </Link>
        <strong>&copy; 2024 Beom Mee</strong>
      </p>
    </footer>
  );
};

export default Footer;
