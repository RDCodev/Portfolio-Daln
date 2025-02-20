import React from "react";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { ToastProps } from "@components/toast/toast";
import type { ToastActionElement } from "@components/toast/toast-action";

type ToasterToast = ToastProps & {
  id            : string;
  title        ?: React.ReactNode;
  description  ?: React.ReactNode;
  action       ?: ToastActionElement;
}

type Toast = Omit<ToasterToast, "id">;

type ToasterState = {
  toasts            : Array<ToasterToast>;
}

type ToasterAction = {
  addToast          : (toast: ToasterToast) => void;
  updateToast       : (toast: Partial<ToasterToast>) => void;
  dismissToast      : (toastId?: ToasterToast["id"]) => void;
  removeToast       : (toastId?: ToasterToast["id"]) => void;
}

let count                     = 0;
const TOAST_LIMIT             = 1;
const TOAST_REMOVE_DELAY      = 5000;
const toastTimeouts           = new Map<string, ReturnType<typeof setTimeout>>();

const useToastStore = create<ToasterState & ToasterAction>()(devtools((set) => ({
  toasts        : new Array<ToasterToast>(),
  addToast: (toast) => set((state) => ({ 
    toasts: [toast, ...state.toasts].slice(0, TOAST_LIMIT)
  })),
  updateToast: (toast) => set((state) => ({ 
    toasts: state.toasts.map((t) => t.id === toast.id ? { ...t, ...toast } : t)
  })),
  dismissToast: (toastId) => set((state) => { 

    toastId ? addToRemoveQueue(toastId) : state.toasts.forEach((toast) => addToRemoveQueue(toast.id));

    return { toasts: state.toasts.map((t) => t.id === toastId || toastId === undefined ? { ...t, open: false } : t) }
  }),
  removeToast: (toastId) => set((state) => ({
    toasts: toastId === undefined ? [] : state.toasts.filter((t) => t.id !== toastId)
  }))
})));

function getId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
};

function addToRemoveQueue(toastId: string) {
  
  if (toastTimeouts.has(toastId)) return;

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);

    useToastStore.getState().removeToast(toastId);
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

function toast({ ...props }: Toast) {

  const id      = getId();
  const update  = (props: ToastProps) => useToastStore.getState().updateToast({ ...props, id });
  const dismiss = () => useToastStore.getState().dismissToast(id);

  useToastStore.getState().addToast({
    ...props, 
    id, 
    open: true, 
    onOpenChange: (open) => !open && dismiss()
  });

  return { id, dismiss, update }
}

function useToast() {
  return {
    toasts: useToastStore((state) => state.toasts),
    toast,
    dismiss: (id?: string) => useToastStore((state) => state.dismissToast(id)),
  }
}

export { useToast, toast };