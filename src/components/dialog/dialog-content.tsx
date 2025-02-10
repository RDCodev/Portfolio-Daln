import * as DialogPrimitive from "@radix-ui/react-dialog";
import { DialogOverlay } from "./dialog-overlay.tsx";
import { cn } from "@utils/cn.ts";

export interface DialogProps 
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> { };

export const DialogContent: React.FC<DialogProps> = ({ children, className, ...props }) => (
  <DialogPrimitive.Portal>
    <DialogOverlay />
    <DialogPrimitive.Content
      className={cn(
        "fixed top-[50%] left-[50%] z-50 grid w-full bg-woodsmoke-950 max-w-lg p-6 rounded-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-woodsmoke-800 shadow-lg", 
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
);