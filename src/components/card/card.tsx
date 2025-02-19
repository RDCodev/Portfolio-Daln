import { cn } from "@utils/cn";
import type React from "react";
import { CardContent } from "./card-content";
import { CardDescription } from "./card-description";
import { CardFooter } from "./card-footer";
import { CardHeader } from "./card-header";
import { CardTitle } from "./card-title";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card: React.FC<CardProps> = ({ className, ...props }) => (
  <div 
    className={cn(
      'w-full h-max rounded-lg border-2 border-woodsmoke-950/50 bg-woodsmoke-100/50 dark:border-woodsmoke-900/75 dark:bg-woodsmoke-950', className
    )} 
    {...props} 
  />
);

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
