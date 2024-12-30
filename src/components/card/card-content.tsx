import { cn } from "@utils/cn";
import { cva } from "class-variance-authority";
import type React from "react";

const cardContent = cva('p-5 pt-0')

export interface CardContentProps 
  extends React.HTMLAttributes<HTMLDivElement> { };

const CardContent: React.FC<CardContentProps> = ({ className, ...props }) => (
  <div
    className={cn(cardContent({ className }))}
    {...props}
  />
)

export { CardContent }