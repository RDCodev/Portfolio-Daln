import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@utils/cn";

export interface DialogOverlayProps 
  extends React.ComponentProps<typeof DialogPrimitive.Overlay> {}

export const DialogOverlay: React.FC<DialogOverlayProps> = ({ className, ...props }) => (
  <DialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-woodsmoke-950/80", 
      className
    )}
    {...props}
  />
);