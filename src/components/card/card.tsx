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
      'rounded-lg border border-woodsmoke-900/50 bg-gradient-to-tl from-woodsmoke-950/10 to-woodsmoke-950/30', className
    )} 
    {...props} 
  />
);

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
