import React from "react";
import fonts from "@/lib/fonts";
import classNames from "classnames";

const Logo = () => {
  return (
    <h1
      className={classNames(
        fonts.gwendolyn.className,
        "text-6xl bg-[--primary] text-white px-4 pb-8 -mt-2 leading-none relative before:w-full before:h-1 before:bg-white before:left-0 before:content-[''] before:block before:top-3 before:absolute before:z-10"
      )}
    >
      issue tracker
    </h1>
  );
};

export default Logo;
