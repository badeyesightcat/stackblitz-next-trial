import fonts from "@/lib/fonts";
import classNames from "classnames";

interface LogoProps {
  footer?: boolean;
}

const Logo = ({ footer }: LogoProps) => {
  return (
    <h1
      className={classNames(
        fonts.comfortaa.className,
        "font-bold bg-[--light] text-[--dark] leading-none relative before:w-full before:bg-white before:left-0 before:content-[''] before:absolute before:z-10",
        footer
          ? "w-fit px-2 pt-4 text-xl before:h-[.25rem] grayscale before:top-1"
          : "text-4xl px-4 pt-8 -mt-[.25rem] before:h-[.3rem] before:top-3"
      )}
    >
      Charlie&apos;s {footer ? "" : <br />} Desk
    </h1>
  );
};

export default Logo;
