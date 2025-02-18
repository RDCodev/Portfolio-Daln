import type React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cn } from "@utils/cn";

export type ToastActionElement = React.ReactElement<typeof ToastAction>;

export interface ToastActionProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action> { };

export const ToastAction: React.FC<ToastActionProps> = ({ className, ...props }) => (
  <ToastPrimitive.Action 
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", 
      className
    )}
    {...props}
  />
);