import type React from "react";
import useInputType from "../../hooks/useInputType";

interface InputChangeProps {
  placeholder?: string;
  type?: "text" | "password" | "email";
  className?: string;
  id?: string;
}

const InputType: React.FC<InputChangeProps> = ({ placeholder, type, className }) => {
  const { inputValue, handleChange } = useInputType();
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default InputType;
