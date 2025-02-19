import { cn } from "@utils/cn";
import type React from "react";

export interface InputProps 
  extends React.InputHTMLAttributes<HTMLInputElement> { }

export const Input: React.FC<InputProps> = ({ className, ...props }) => (
  <input
    className={cn(
      "w-full h-max border border-woodsmoke-700 bg-transparent px-3 py-2 rounded-lg text-sm shadow-md focus:outline-none focus:ring-1 focus:border-woodsmoke-700 focus:ring-woodsmoke-700 invalid:border-carnation-700 invalid:ring-carnation-700 invalid:focus:border-carnation-700 focus:invalid:ring-carnation-700", 
      className
    )}
    {...props}
  />
);