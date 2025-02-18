import * as ToastPrimitive from "@radix-ui/react-toast";
import { cn } from "@utils/cn";
import type React from "react";

export interface ToastDescriptionProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description> { }

export const ToastDescription: React.FC<ToastDescriptionProps> = ({className, ...props}) => (
  <ToastPrimitive.Description
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
)