import { cn } from "@utils/cn";
import type React from "react";

export interface DialogFooterProps 
  extends React.HTMLAttributes<HTMLDivElement> { };

export const DialogFooter: React.FC<DialogFooterProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", 
      className
    )}
    {...props}
  />
);