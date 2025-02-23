import { cn } from "@utils/cn";
import type React from "react";

export interface CardHeaderProps 
  extends React.HTMLAttributes<HTMLDivElement> { };

const CardHeader: React.FC<CardHeaderProps> = ({ className, ...props }) => (
  <div
    className={cn('flex flex-col space-y-1.5 p-5', className)}
    {...props}
  />
)

export { CardHeader }