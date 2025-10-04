import React from "react";

interface IInterface {
  type: "text" | "email" | "password" | "number" | "search" | "checkbox";
  placeholder?: string;
  className: string;
  defaultValue?: string | number;
  id: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Input: React.FC<IInterface> = ({
  className,
  disabled = false,
  id,
  name,
  placeholder,
  required = false,
  type,
  defaultValue,
  onClick,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        id={id}
        name={name}
        required={required}
        disabled={disabled}
        defaultValue={defaultValue}
        onClick={onClick}
      />
    </>
  );
};

export default Input;
