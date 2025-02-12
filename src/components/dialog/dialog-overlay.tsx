import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '@utils/cn';

export interface DialogOverlayProps
  extends React.ComponentProps<typeof DialogPrimitive.Overlay> { }

export const DialogPortal = DialogPrimitive.Portal;

export const DialogOverlay: React.FC<DialogOverlayProps> = ({ className, ...props }) => (
  <DialogPrimitive.Overlay
    className={cn('', className)}
    {...props}
  />
);