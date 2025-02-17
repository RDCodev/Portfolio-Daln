import * as ToastPrimitive from "@radix-ui/react-toast";
import { cn } from "@utils/cn";
import { X } from "lucide-react";
import type React from "react";

export interface ToastCloseProps 
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close> { }

export const ToastClose: React.FC<ToastCloseProps> = ({className, ...props}) => (
  <ToastPrimitive.Close
    className={cn("", className)}
    {...props}
  >
    <X />
  </ToastPrimitive.Close>
);