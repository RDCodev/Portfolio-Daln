import { cva } from "class-variance-authority";
import { cn } from "@utils/cn";
import type { VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  'inline-flex items-center justify-center font-poppins font-medium rounded-lg transition-colors focus-visible:outline focus-visible:outline-woodsmoke-100 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 
          'bg-woodsmoke-700 text-woodsmoke-50 hover:bg-woodsmoke-800/90',
        secondary: 
          'bg-woodsmoke-100 text-woodsmoke-950 hover:bg-woodsmoke-200/90',
        outline: 
          'bg-transparent text-woodsmoke-50 hover:bg-woodsmoke-500/50 border border-woodsmoke-500/50',
        ghost: 
          'bg-transparent text-woodsmoke-50 hover:bg-woodsmoke-500/50',
        raw: 
          'bg-transparent text-woodsmoke-50',
        link: 
          'bg-transparent text-woodsmoke-50'
      },
      size: {
        default: 
          'h-8 px-6 py-2',
        sm: 
          'h-7 px-4 rounded-md',
        icon: 
          'h-8 w-8'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  });

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> { };

export interface LinkedButtonProps 
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> { };

const Button: React.FC<LinkedButtonProps & ButtonProps> = ({ className, variant, size, disabled, href, ...props }) =>
(
  variant !== "link" ? 
    (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={disabled || undefined}
        {...props}
      />
    ) : 
    (
      <a
        href={href}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
);

export { Button, buttonVariants }