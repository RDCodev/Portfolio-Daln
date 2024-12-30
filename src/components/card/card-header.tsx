import { cva } from "class-variance-authority";
import type React from "react";

const cardHeaderProps = cva('flex flex-col space-y-1.5 p-5');

export interface CardHeaderProps 
  extends React.HTMLAttributes<HTMLDivElement> { };

const CardHeader: React.FC<CardHeaderProps> = ({ className, ...props }) => (
  <div
    className={cardHeaderProps({ className })}
    {...props}
  />
)

export { CardHeader }