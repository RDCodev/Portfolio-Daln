import { useToast } from "@hooks/use-toast";
import { ToastProvider } from "@ui/components/toast/toast-provider";
import { Toast } from "@ui/components/toast/toast";
import { ToastViewport } from "@ui/components/toast/toast-viewport";
import { ToastTitle } from "@ui/components/toast/toast-title";
import { ToastDescription } from "@ui/components/toast/toast-description";
import { ToastClose } from "@radix-ui/react-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({id, title, description, action, ...props}) => (
        <Toast key={id} {...props}>
          <div className="grid gap-1">
            { title && <ToastTitle>{title}</ToastTitle>}
            { description && <ToastDescription>{description}</ToastDescription>}
            { action }
          </div>
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}