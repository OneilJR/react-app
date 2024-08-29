import React from "react";

type InputProps = {
    name: string;
    value?:string;
    type?:string;
    onChange?:(e:any) => void;
    className?:string;
    onKeyDown?:(e:any) => void;
    disabled?: boolean;

};

const Input = ({
   name,
   value,
   type="text",
   onChange,
   onKeyDown,
   className,
   disabled,
  
  }: InputProps) => {
    return (
      <input
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
        type={type}
        className={`flex-1 bg-transperent placeholder-gray-300 border-2 border-gray-300 rounded-full px-3 py-1 ${className}`}
        placeholder={`Enter ${name}`}
      />
    );
}

export default Input