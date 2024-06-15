import fonts from "@/lib/fonts";
import classNames from "classnames";

interface LogoProps {
  footer?: boolean;
}

const Logo = ({ footer }: LogoProps) => {
  return (
    <h1
      className={classNames(
        fonts.gwendolyn.className,
        "font-bold bg-[--light] text-[--dark] leading-none relative before:w-full before:bg-white before:left-0 before:content-[''] before:block before:top-3 before:absolute before:z-10",
        footer
          ? "w-fit px-2 pb-4 text-4xl before:h-[.125rem] grayscale"
          : "text-7xl px-4 pb-8 -mt-2 before:h-1"
      )}
    >
      issue tracker
    </h1>
  );
};

export default Logo;
