import React from "react";
import Spinner from "./Spinner";

type ButtonProps = {
    text?:string;
    className?:string;
    secondary?:boolean;
    onClick?:() => void;
    loading?:boolean;
};

function Button({text="Button",className,secondary,onClick,loading= false}: ButtonProps) {
    return (
      <button
        className={`py-2 px-9 rounded-full text-white border-2 border-white hover:bg-myPink flex justify-center items-center gap-3 transtion-all hover:drop-shadow-lg ${secondary ? "bg-myPink" : "bg-myBlue"} ${className}${loading && "cursor-wait"}`} 
        onClick={onClick}
        disabled = {loading}
      >
        {loading && <Spinner />}
      {text}
      </button>
    );
}

export default Button