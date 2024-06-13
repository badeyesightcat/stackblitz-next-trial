import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col items-center">
      <h1>404</h1>
      <p>
        There is no page which you wanted to visit, please go back to Home and
        try something else.
      </p>
      <Link href={"/"}>Go home</Link>
    </section>
  );
};

export default NotFoundPage;
