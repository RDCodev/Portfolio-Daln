import { cn } from "@utils/cn";
import { cva } from "class-variance-authority";
import type React from "react";

const cardDescription = cva('text-sm text-woodsmoke-300');

export interface CardDescriptionProps 
  extends React.HTMLAttributes<HTMLDivElement> { };

const CardDescription: React.FC<CardDescriptionProps> = ({ className, ...props}) => (
  <div
    className={cn(cardDescription({ className }))}
    {...props}
  />
);

export { CardDescription }