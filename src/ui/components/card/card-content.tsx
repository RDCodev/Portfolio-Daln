import { cn } from "@utils/cn";
import type React from "react";

export interface CardContentProps 
  extends React.HTMLAttributes<HTMLDivElement> { };

const CardContent: React.FC<CardContentProps> = ({ className, ...props }) => (
  <div
    className={cn('p-5 pt-0', className)}
    {...props}
  />
)

export { CardContent }