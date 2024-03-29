import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-800",
    gray_800: "bg-gray-800 text-white-A700",
  },
  outline: {
    gray_800: "border border-gray-800 border-solid text-gray-800",
    gray_500: "border-2 border-gray-500 border-solid text-gray-500",
    bluegray_100: "border border-bluegray-100 border-solid text-gray-800",
  },
};
const sizes = {
  xs: "p-[5px]",
  sm: "p-[15px]",
  md: "pl-4 py-4",
  lg: "px-4 py-[19px]",
  xl: "p-[21px] sm:px-5",
  "2xl": "sm:pl-5 pl-[23px] py-[23px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "gray_800",
    "gray_500",
    "bluegray_100",
  ]),
};

export { Button };
