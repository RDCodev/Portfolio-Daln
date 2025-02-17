import React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cn } from "@utils/cn";

export interface ToastViewportProps 
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport> { }

export const ToastViewport: React.FC<ToastViewportProps> = ({ className, ...props }) => (
  <ToastPrimitive.Viewport 
    className={cn("", className)}
    {...props}
  />
);