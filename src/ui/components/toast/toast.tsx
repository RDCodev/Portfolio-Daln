import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import * as ToastPrimitive from "@radix-ui/react-toast";
import type React from "react";
import { cn } from "@utils/cn";

const toastVariants = cva(
  `group pointer-events-auto tracking-wide relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border px-6 py-4 pr-8 shadow-lg 
    transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] 
    data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full`,
  {
    variants: {
      variant: {
        default: 
          'border border-woodsmoke-900 bg-woodsmoke-950 text-woodsmoke-50',
        destructive:
          'destructive group border-carnation-900 bg-carnation-950/90 text-woodsmoke-50',
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

export interface ToastProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root>,
  VariantProps<typeof toastVariants> { }

export const Toast: React.FC<ToastProps> = ({ className, variant, ...props }) => (
  <ToastPrimitive.Root
    className={cn(toastVariants({variant}), className)}
    {...props}
  />
);