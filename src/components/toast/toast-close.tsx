import * as ToastPrimitive from "@radix-ui/react-toast";
import { cn } from "@utils/cn";
import { X } from "lucide-react";
import type React from "react";

export interface ToastCloseProps 
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close> { }

export const ToastClose: React.FC<ToastCloseProps> = ({className, ...props}) => (
  <ToastPrimitive.Close
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", 
      className
    )}
    {...props}
  >
    <X className="h-4 w-4"/>
  </ToastPrimitive.Close>
);