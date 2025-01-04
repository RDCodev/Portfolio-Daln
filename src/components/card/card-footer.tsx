import { cn } from "@utils/cn";
import type React from "react";

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement> { };

const CardFooter: React.FC<CardFooterProps> = ({ className, ...props }) => (
  <div
    className={cn('flex items-center p-5 pt-0', className)}
    {...props}
  />
);

export { CardFooter }