import React from "react";

interface IButtonProps {
  type: "button" | "submit" | "reset";
  className: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  className,
  type,
  disabled = false,
}) => {
  return (
    <>
      <button
        disabled={disabled}
        type={type}
        className={className}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
