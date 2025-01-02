import React from "react";

interface IInputProps {
  type: "text" | "number" | "email" | "password" | "search";
  placeholder: string;
  id: string;
  name: string;
  className: string;
  required?: boolean;
  value?: string | number;
}

const Input: React.FC<IInputProps> = ({
  type,
  placeholder,
  id,
  className,
  name,
  value,
  required = false,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        className={className}
        value={value}
        required={required}
      />
    </>
  );
};

export default Input;
