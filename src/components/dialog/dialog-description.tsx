import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@utils/cn";
import type React from "react";

export interface DialogDescriptionProps 
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> { };

export const DialogDescription: React.FC<DialogDescriptionProps> = ({ className, ...props }) => (
  <DialogPrimitive.Description
    className={cn(
      "text-sm text-woodsmoke-100", 
      className
    )}
    {...props}
  />
);