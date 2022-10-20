import React from "react";

const InputElement = ({
  value,
  id,
  type,
  onChange,
  required,
}: {
  value: string;
  id: string;
  type: "text" | "password" | "email" | "file";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) => {
  return (
    <div>
      <label htmlFor={id} className="text-xl">
        {value}
      </label>
      <input
        className={`input`}
        type={type}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputElement;
