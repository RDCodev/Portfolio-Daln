import { cn } from "@utils/cn";
import type React from "react";

export interface CardDescriptionProps 
  extends React.HTMLAttributes<HTMLDivElement> { };

const CardDescription: React.FC<CardDescriptionProps> = ({ className, ...props}) => (
  <div
    className={cn('text-sm text-woodsmoke-300', className)}
    {...props}
  />
);

export { CardDescription }