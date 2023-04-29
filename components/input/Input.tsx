"use client";

import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";
interface InputProps {
  id: string;
  label: string;
  type?: string;
  isTextArea?: boolean;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  isTextArea,
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-600 absolute top-6 left-2"
        />
      )}
      <input
        id={id}
        type={type}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        className={`peer w-full p-6 ${
          isTextArea && "py-8 px-10"
        } pt-6 font-light bg-white border-2 
        rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed 
        ${formatPrice ? "pl-7" : "pl-4"} 
        ${errors[id] ? "border-rose-400" : "border-neutral-400"} 
        ${errors[id] ? "focus:border-rose-400" : "focus:border-neutral-400"}`}
      />
      <label
        className={` absolute text-md duration-150 transform -translate-y-3 
        top-5 z-10 origin-[0] 
        ${
          formatPrice ? "left-7" : "left-4"
        } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
        peer-focus:-translate-y-4 ${
          errors[id] ? "text-red-400" : "text-neutral-400"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
