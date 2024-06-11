import React from "react";
import Link from "next/link";

const Menus = () => {
  return (
    <ul className="flex flex-1 gap-4">
      <li>
        <Link
          href="/issue-board"
          className="px-2 py-1 leading-none hover:border-dashed border-transparent border-4 hover:border-[--primary]"
        >
          Issue board
        </Link>
      </li>
      <li>
        <Link
          href="/profile"
          className="px-2 py-1 leading-none hover:border-dashed border-transparent border-4 hover:border-[--primary]"
        >
          profile
        </Link>
      </li>
    </ul>
  );
};

export default Menus;
