import { cn } from "@utils/cn";
import type React from "react";

export interface DialogHeaderProps 
  extends React.HTMLAttributes<HTMLDivElement> { };

export const DialogHeader: React.FC<DialogHeaderProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left", 
      className
    )}
    {...props}
  />
);