import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@utils/cn";

export interface DialogTitleProps 
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> { };

export const DialogTitle: React.FC<DialogTitleProps> = ({ className, ...props }) => (
  <DialogPrimitive.Title
    className={cn(
      "text-lg font-semibold leading-none tracking-normal", 
      className
    )}
    {...props}
  />
);