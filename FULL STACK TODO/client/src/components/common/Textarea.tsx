import React from "react";

interface ITextarea {
  className: string;
  name: string;
  id: string;
  rows: number;
  cols: number;
  defaultValue?: string;
  children?: React.ReactNode;
  placeholder: string;
}

const Textarea: React.FC<ITextarea> = ({
  children,
  className,
  cols,
  id,
  name,
  rows,
  defaultValue,
  placeholder,
}) => {
  return (
    <>
      <textarea
        className={className}
        name={name}
        id={id}
        rows={rows}
        cols={cols}
        defaultValue={defaultValue}
        placeholder={placeholder}
      >
        {children}
      </textarea>
    </>
  );
};

export default Textarea;
