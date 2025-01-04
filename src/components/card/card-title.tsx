import { cn } from "@utils/cn";
import type React from "react";

export interface cardTitleProps 
  extends React.HTMLAttributes<HTMLDivElement> { };

const CardTitle: React.FC<cardTitleProps> = ({ className, ...props }) => (
  <div
    className={cn(
      'text-lg font-semibold tracking-tight leading-none', className
    )}
    {...props}
  />
)

export { CardTitle } 