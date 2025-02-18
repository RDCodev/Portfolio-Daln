import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import * as ToastPrimitive from "@radix-ui/react-toast";
import type React from "react";
import { cn } from "@utils/cn";

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg',
  {
    variants: {
      variant: {
        default: 
          'border border-woodsmoke-900 bg-woodsmoke-950 text-woodsmoke-50',
        destructive:
          ''
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