import React from "react";

const sizeClasses = {
  txtPoppinsMedium18Bluegray100: "font-medium font-poppins",
  txtPoppinsRegular36Gray500: "font-normal font-poppins",
  txtPoppinsBold18: "font-bold font-poppins",
  txtPoppinsRegular18Gray500: "font-normal font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPlayfairDisplayBold72: "font-bold font-playfairdisplay",
  txtPoppinsRegular18Bluegray100: "font-normal font-poppins",
  txtPoppinsMedium24Bluegray100: "font-medium font-poppins",
  txtPoppinsRegular36: "font-normal font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsBold56: "font-bold font-poppins",
  txtPoppinsBold24: "font-bold font-poppins",
  txtPoppinsBold36: "font-bold font-poppins",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsMedium36: "font-medium font-poppins",
  txtPoppinsMedium36Gray500: "font-medium font-poppins",
  txtPoppinsBold24WhiteA700: "font-bold font-poppins",
  txtPoppinsRegular18Gray50087: "font-normal font-poppins",
  txtPoppinsRegular18Bluegray10087: "font-normal font-poppins",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsRegular18WhiteA700: "font-normal font-poppins",
  txtPoppinsMedium18Gray500: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
