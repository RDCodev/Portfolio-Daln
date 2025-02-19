import * as DialogPrimitive from "@radix-ui/react-dialog";
import { DialogOverlay } from "./dialog-overlay.tsx";
import { cn } from "@utils/cn.ts";
import type React from "react";

export interface DialogProps 
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithRef<typeof DialogPrimitive.Content> { };

export const DialogContent: React.FC<DialogProps> = ({ children, className, ref, ...props }) => (
  <DialogPrimitive.Portal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed top-[50%] left-[50%] z-50 grid w-[calc(100%-20px)] max-h-[calc(100vh-20px)] bg-woodsmoke-950 max-w-lg p-6 rounded-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-woodsmoke-900/50 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]", 
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
);