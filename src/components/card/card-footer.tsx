import { cva } from "class-variance-authority";
import type React from "react";

const cardFooter = cva('flex items-center p-5 pt-0');

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement> { };

const CardFooter: React.FC<CardFooterProps> = ({ className, ...props }) => (
  <div
    className={cardFooter({ className })}
    {...props}
  />
);

export { CardFooter }