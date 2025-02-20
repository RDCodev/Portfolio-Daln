import { cn } from "@utils/cn";
import type React from "react";

export interface TextAreaProps 
  extends React.InputHTMLAttributes<HTMLTextAreaElement> { };

export const TextArea: React.FC<TextAreaProps> = ({ className, ...props }) => (
  <textarea
    className={cn(
      "w-full h-max min-h-[80px] max-h-[320px] resize-y border border-woodsmoke-700 bg-transparent px-3 py-2 rounded-lg text-sm shadow-md focus:ring-1 focus:outline-none focus:border-woodsmoke-700 focus:ring-woodsmoke-700 aria-[invalid=true]:border-carnation-700 aria-[invalid=true]:ring-carnation-700 aria-[invalid=true]:focus:border-carnation-700 aria-[invalid=true]:focus:ring-carnation-700",
      className
    )}
    {...props}
  />
);