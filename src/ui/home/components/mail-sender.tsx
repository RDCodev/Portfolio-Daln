import { Button } from "@components/button/button";
import { Dialog } from "@components/dialog/dialog";
import { DialogContent } from "@components/dialog/dialog-content";
import { DialogTitle } from "@components/dialog/dialog-title";
import { DialogTrigger } from "@components/dialog/dialog-trigger";
import { DialogClose } from "@components/dialog/dialog-close";
import { SendHorizontal } from "lucide-react";
import { Input } from "@components/input/input";
import { TextArea } from "@components/text-area/text-area";
import { useForm } from "react-hook-form"
import { DialogDescription } from "@components/dialog/dialog-description";
import { actions } from "astro:actions";
import { useToast } from "@hooks/use-toast";
import React from "react";

export type MailSenderValues = {
  firstName: string;
  lastName: string;
  message: string;
  email: string;
}

export const MailSender: React.FC = () => {

  const [open, setOpen] = React.useState(false);
  const { toast } = useToast();
  const { 
    reset,
    register,
    handleSubmit, 
    formState: { errors, isValid } } = useForm<MailSenderValues>({ 
      mode: "onChange"
    });

  const onSendMessage =  async (params: MailSenderValues) => {    

    const { data, error } = await actions.send(params);

    !error ? 
      toast({ description: "Message sent successfully!" }) : 
      toast({ description: data && "Failed to send message!" })
    
    reset();
    setOpen(false);
  }

  React.useEffect(() => {
    !open && reset();
  }, [open])

  return (
    <Dialog onOpenChange={setOpen} modal open={open}>
      <DialogTrigger asChild>
        <Button className="ml-5 animate-appear" disabled variant="raw" size="icon" target="_blank" href="#mail">
          <SendHorizontal className="text-woodsmoke-950 dark:text-woodsmoke-400 hover:scale-125 transition-all ease-in duration-100"/>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Message</DialogTitle>
        <DialogDescription>Please provide me with your details and I will contact you as soon as possible. 👌</DialogDescription>
        <form onSubmit={handleSubmit(onSendMessage)} method="POST" className="flex flex-col space-y-8 py-3">
          <div className="grid grid-cols-2 grid-rows-1 gap-5">
            <div className="relative inline-flex flex-col items-start">
              <label htmlFor="first-name" className="text-sm font-medium tracking-wide">First Name*</label>
              <Input 
                id="first-name" type="text" autoComplete="off" className="mt-2.5"
                {...register("firstName", { required: true })}
              />
              { errors.firstName && <small className="absolute bottom-[-20px] left-0 text-red-500 text-xs font-medium tracking-wide">First Name is required</small> }
            </div>
            <div className="inline-flex flex-col items-start">
              <label htmlFor="last-name" className="text-sm font-medium tracking-wide">Last Name</label>
              <Input 
                id="last-name" type="text" autoComplete="off" className="mt-2.5"
                {...register("lastName")}
              />
            </div>
          </div>
          <div className="relative inline-flex flex-col items-start">
            <label htmlFor="email" className="text-sm font-medium tracking-wide">Email*</label>
            <Input 
              id="email" type="email" autoComplete="off" className="mt-2.5"
              {...register("email", { required: true, pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
            />
            { errors.email && 
              <small className="absolute bottom-[-20px] left-0 text-red-500 text-xs font-medium tracking-wide">
                { errors.email.type === "required" && "Email is required." }
                { errors.email.type === "pattern" && "Email is not valid." }
              </small> 
            }
          </div>
          <div className="relative inline-flex flex-col items-start">
            <label htmlFor="message" className="text-sm font-medium tracking-wide">Message*</label>
            <TextArea id="message" className="mt-2.5"
              {...register("message", { required: true })}
            />
            { errors.message && <small className="absolute bottom-[-20px] left-0 text-red-500 text-xs font-medium tracking-wide">Message is required.</small> }
          </div>
          <div className="flex flex-row-reverse  sm:flex-row sm:justify-end sm:space-x-2">
            <Button type="submit" disabled={!isValid}>Send</Button>
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}