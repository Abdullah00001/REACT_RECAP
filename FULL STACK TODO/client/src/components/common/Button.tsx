import React from "react";

interface IButton {
  onClick?: () => void;
  disabled?: boolean;
  className: string;
  type: "submit" | "button" | "reset";
  children: React.ReactNode;
}

const Button: React.FC<IButton> = ({
  className,
  disabled = false,
  type,
  onClick,
  children,
}) => {
  return (
    <>
      <button
        disabled={disabled}
        className={className}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
