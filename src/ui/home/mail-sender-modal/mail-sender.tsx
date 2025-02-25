import React from "react";
import { Button } from "@ui/components/button/button";
import { Dialog } from "@ui/components/dialog/dialog";
import { DialogContent } from "@ui/components/dialog/dialog-content";
import { DialogTitle } from "@ui/components/dialog/dialog-title";
import { DialogTrigger } from "@ui/components/dialog/dialog-trigger";
import { DialogClose } from "@ui/components/dialog/dialog-close";
import { RotateCw, SendHorizontal } from "lucide-react";
import { Input } from "@ui/components/input/input";
import { TextArea } from "@ui/components/text-area/text-area";
import { useForm } from "react-hook-form"
import { DialogDescription } from "@ui/components/dialog/dialog-description";
import { actions } from "astro:actions";
import { useToast } from "@hooks/use-toast";
import type { ErrorInferenceObject } from "astro/actions/runtime/utils.js";

export type MailSenderValues = {
  firstName: string;
  lastName: string;
  message: string;
  email: string;
}

export const MailSender: React.FC = () => {

  const [isOpen, setOpen] = React.useState(false);
  const [isSending, setSending] = React.useState(false);
  const { toast } = useToast();
  const { reset, register, handleSubmit, formState: { errors, isValid } } = 
    useForm<MailSenderValues>({ mode: "onChange" });

  const deliverMessage = async (params: MailSenderValues) => {

    setSending(true);
      
    try {
      const res = await actions.send.orThrow(params);
        
      toast({ 
        title: "Delivered 🚀",
        description: res && "Message sent successfully" 
      });

      reset(); setOpen(false);
    
    } catch (error) {
    
      const { message } = error as ErrorInferenceObject;
    
      toast({ 
        title: "Failed 😵‍💫",
        variant: "destructive",
        description: message || "Failed to send message."
      });
    } finally {
      setSending(false)
    }
  }

  const onDeliverMessage = handleSubmit((payload) => deliverMessage(payload));

  React.useEffect(() => { !isOpen && reset() }, [isOpen]);

  return (
    <Dialog onOpenChange={setOpen} modal={true} open={isOpen}>
      <DialogTrigger asChild>
        <Button className="ml-5 duration-1000 animate-in fade-in" variant="raw" size="icon">
          <SendHorizontal className="text-woodsmoke-950 dark:text-woodsmoke-400 hover:scale-125 transition-all ease-in duration-100"/>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Message</DialogTitle>
        <DialogDescription>Please provide me with your details and I will contact you as soon as possible. 👌</DialogDescription>
        <form onSubmit={onDeliverMessage} method="POST" className="flex flex-col space-y-8 py-3">
          <div className="grid grid-cols-2 grid-rows-1 gap-5">
            <div className="relative inline-flex flex-col items-start">
              <label htmlFor="first-name" className="text-sm font-medium tracking-wide">First Name*</label>
              <Input 
                id="first-name" 
                type="text" 
                autoComplete="off" 
                className="mt-2.5"
                aria-invalid={errors.firstName ? "true" : "false"}
                {...register("firstName", { required: true })}
              />
              { errors.firstName && <small role="alert" className="absolute bottom-[-20px] left-0 text-red-500 text-xs font-medium tracking-wide">First Name is required</small> }
            </div>
            <div className="inline-flex flex-col items-start">
              <label htmlFor="last-name" className="text-sm font-medium tracking-wide">Last Name</label>
              <Input 
                id="last-name" 
                type="text" 
                autoComplete="off" 
                className="mt-2.5"                
                {...register("lastName")}
              />
            </div>
          </div>
          <div className="relative inline-flex flex-col items-start">
            <label htmlFor="email" className="text-sm font-medium tracking-wide">Email*</label>
            <Input 
              id="email" 
              type="email" 
              autoComplete="off" 
              className="mt-2.5"
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", { required: true, pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
            />
            { errors.email && 
              <small role="alert" className="absolute bottom-[-20px] left-0 text-red-500 text-xs font-medium tracking-wide fade-in">
                { errors.email.type === "required" && "Email is required." }
                { errors.email.type === "pattern" && "Email is not valid." }
              </small> 
            }
          </div>
          <div className="relative inline-flex flex-col items-start">
            <label htmlFor="message" className="text-sm font-medium tracking-wide">Message*</label>
            <TextArea 
              id="message" 
              className="mt-2.5"
              aria-invalid={errors.message ? "true" : "false"}
              {...register("message", { required: true })}
            />
            { errors.message && <small role="alert" className="absolute bottom-[-20px] left-0 text-red-500 text-xs font-medium tracking-wide">Message is required.</small> }
          </div>
          <div className="flex flex-row-reverse  sm:flex-row sm:justify-end sm:space-x-2">
            <Button type="submit" disabled={!isValid || isSending}>              
              { isSending && <RotateCw className="animate-spin mr-2" size={18}/> }
              Send
            </Button>
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}