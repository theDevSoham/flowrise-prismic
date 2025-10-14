import React from "react";
import { PrismicNextLink, type PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

const Button: React.FC<PrismicNextLinkProps> = ({
  className,
  children,
  ...restProps
}) => {
  return (
    <PrismicNextLink
      {...restProps}
      prefetch={false}
      className={clsx(
        "block w-fit bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white font-bold text-base tracking-wide",
        className
      )}
    >
      {children}
    </PrismicNextLink>
  );
};

export default Button;
