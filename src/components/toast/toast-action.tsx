import type React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cn } from "@utils/cn";

export interface ToastActionProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action> { };

export const ToastAction: React.FC<ToastActionProps> = ({ className, ...props }) => (
  <ToastPrimitive.Action 
    className={cn("", className)}
    {...props}
  />
);