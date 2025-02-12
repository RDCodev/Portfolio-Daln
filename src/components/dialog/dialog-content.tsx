import React from 'react';
import { DialogOverlay, DialogPortal } from './dialog-overlay';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '@utils/cn';

export interface DialogContentProps 
  extends React.ComponentProps<typeof DialogPrimitive.Content> { }

export const DialogContent: React.FC<DialogContentProps> = ({ className, children, ...props }) => (
  <DialogPortal>
    <DialogOverlay/>
    <DialogPrimitive.Content
      className={cn('', className)}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
);