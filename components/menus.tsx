import React from "react";
import Link from "next/link";

const Menus = () => {
  return (
    <ul className="flex flex-1 gap-4">
      <li>
        <Link href="/issue-board">Issue board</Link>
      </li>
      <li>
        <Link href="/profile">profile</Link>
      </li>
    </ul>
  );
};

export default Menus;
