import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import * as ToastPrimitive from "@radix-ui/react-toast";
import type React from "react";
import { cn } from "@utils/cn";

const toastVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: 
          '',
        success:
          '',
        warning:
          '',
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