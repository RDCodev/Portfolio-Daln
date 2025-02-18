import React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cn } from "@utils/cn";

export interface ToastViewportProps 
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport> { }

export const ToastViewport: React.FC<ToastViewportProps> = ({ className, ...props }) => (
  <ToastPrimitive.Viewport 
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", 
      className
    )}
    {...props}
  />
);