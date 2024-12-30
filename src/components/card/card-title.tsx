import { cn } from "@utils/cn";
import { cva } from "class-variance-authority";
import type React from "react";

const cardTitle = cva('text-lg font-semibold tracking-tight leading-none');

export interface cardTitleProps 
  extends React.HTMLAttributes<HTMLDivElement> { };

const CardTitle: React.FC<cardTitleProps> = ({ className, ...props }) => (
  <div
    className={cn(cardTitle({ className }))}
    {...props}
  />
)

export { CardTitle }