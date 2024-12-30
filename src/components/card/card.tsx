import { cn } from "@utils/cn";
import { cva } from "class-variance-authority";
import type React from "react";

const cardVariants = cva(
  'rounded-lg border border-woodsmoke-800 bg-gradient-to-tr from-woodsmoke-800/40 to-woodsmoke-800/60',
  {
    variants: {
      default: { },
      elevated: { },
      outlined: { },
    },
  }
);

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card: React.FC<CardProps> = ({ className, ...props }) => (
  <div className={cn(cardVariants({ className }))} {...props} />
);

export { Card, cardVariants };
