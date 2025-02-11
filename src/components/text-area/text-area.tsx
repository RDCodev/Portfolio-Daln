import { cn } from "@utils/cn";
import type React from "react";

export interface TextAreaProps 
  extends React.InputHTMLAttributes<HTMLTextAreaElement> { };

export const TextArea: React.FC<TextAreaProps> = ({ className, ...props }) => (
  <textarea
    className={cn(
      "w-full h-max min-h-[80px] max-h-[320px] border border-woodsmoke-700 bg-transparent px-3 py-2 rounded-lg text-base shadow-md focus:outline-none focus:border-woodsmoke-500 focus:ring-1 focus:ring-woodsmoke-500",
      className
    )}
    {...props}
  />
);