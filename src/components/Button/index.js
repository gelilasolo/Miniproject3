import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder33: "rounded-radius335",
  RoundedBorder17: "rounded-radius17",
  icbCustomBorderTL25:
    "rounded-bl-[0] rounded-br-[25px] rounded-tl-[25px] rounded-tr-[25px]",
};
const variants = {
  OutlineLightblue600: "bg-light_blue_400 shadow-bs1 text-white_A700",
  OutlineGray900: "bg-bluegray_900 shadow-bs2 text-white_A700",
  OutlineBluegray100: "bg-gray_100 shadow-bs text-bluegray_800",
  icbOutlineRed500: "bg-red_A200 border-bw3 border-red_500 border-solid",
  icbOutlineOrange500:
    "bg-orange_400 border-bw3 border-orange_500 border-solid",
  icbOutlineLightgreenA701:
    "bg-light_green_A700 border-bw3 border-light_green_A701 border-solid",
};
const sizes = {
  sm: "lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
  md: "lg:p-[17px] xl:p-[19px] p-[22px] 3xl:p-[26px]",
  smIcn: "lg:p-[10px] xl:p-[12px] p-[14px] 3xl:p-[16px]",
  mdIcn: "lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
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
  shape: PropTypes.oneOf([
    "RoundedBorder33",
    "RoundedBorder17",
    "icbCustomBorderTL25",
  ]),
  variant: PropTypes.oneOf([
    "OutlineLightblue600",
    "OutlineGray900",
    "OutlineBluegray100",
    "icbOutlineRed500",
    "icbOutlineOrange500",
    "icbOutlineLightgreenA701",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smIcn", "mdIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "icbCustomBorderTL25",
  variant: "OutlineLightblue600",
  size: "sm",
};

export { Button };
