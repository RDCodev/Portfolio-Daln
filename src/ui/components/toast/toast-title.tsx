import * as ToastPrimitive from "@radix-ui/react-toast";
import { cn } from "@utils/cn";
import type React from "react";

export interface ToastTitleProps 
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title> { }

export const ToastTitle: React.FC<ToastTitleProps> = ({className, ...props}) => (
  <ToastPrimitive.Title
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
)