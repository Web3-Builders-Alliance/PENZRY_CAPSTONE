import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  to?: string;
  typeoF?: "button" | "submit" | "reset";
  disabled?: boolean;
  type: string;
  onClick?: any;
}

function Button({
  className,
  to,
  type,
  typeoF,
  disabled = false,
  children,
  ...props
}: ButtonProps) {
  const base =
    "md:text-body-md text-center text-body-sm font-medium transition-all focus:outline-none disabled:cursor-not-allowed duration-[800ms] shadow rounded py-3.5 px-3 md:py-3 md:px-4 " +
    className;

  let style;

  if (type === "primary") {
    style =
      base +
      " bg-primary text-white hover:bg-hover-color active:border-2 active:border-grey-90 disabled:bg-disabled";
  } else if (type === "secondary") {
    style =
      base +
      " text-primary border border-grey-10 bg-white hover:border-primary hover:bg-[#f5f8ff] active:bg-white active:border-2 disabled:border-disabled disabled:text-disabled disabled:border disabled:bg-white";
  } else if (type === "small") {
    style =
      "px-3 py-1 text-body-xs lg:text-body-sm bg-variant-20 rounded-3xl text-grey-40 flex gap-0.5 justify-center items-center " +
      className;
  }

  //BUTTON IS A LINK TYPE
  if (to) {
    return (
      <Link to={to} className={style} {...props}>
        {children}
      </Link>
    );
  }

  //BUTTON IS A BUTTON TYPE
  return (
    <button className={style} disabled={disabled} {...props} type={typeoF}>
      {children}
    </button>
  );
}

export default Button;
