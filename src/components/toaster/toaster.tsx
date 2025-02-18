import { useToast } from "@hooks/use-toast";
import { ToastProvider } from "@components/toast/toast-provider";
import { Toast } from "@components/toast/toast";
import { ToastViewport } from "@components/toast/toast-viewport";
import { ToastTitle } from "@components/toast/toast-title";
import { ToastDescription } from "@components/toast/toast-description";
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