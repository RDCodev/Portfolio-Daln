import { Button } from "@components/button/button";
import { Dialog } from "@components/dialog/dialog";
import { DialogContent } from "@components/dialog/dialog-content";
import { DialogFooter } from "@components/dialog/dialog-footer";
import { DialogTitle } from "@components/dialog/dialog-title";
import { DialogTrigger } from "@components/dialog/dialog-trigger";
import { DialogClose } from "@components/dialog/dialog-close";
import { AtSign } from "lucide-react";
import { Input } from "@components/input/input";
import { TextArea } from "@components/text-area/text-area";
import { useForm } from "react-hook-form"
import type { Resolver } from "react-hook-form";

type MailSenderValues = {
  firstName: string;
  lastName: string;
  message: string;
}

const resolver: Resolver<MailSenderValues> = async (values) => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName ? {
      firstName: {
        type: "required",
        message: "First Name is required"
      }
    } : { }
  } 
}


export const MailSender: React.FC = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<MailSenderValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="ml-5" variant="raw" size="icon" target="_blank" href="#mail">
          <AtSign className="text-woodsmoke-950 dark:text-woodsmoke-400 hover:scale-125 transition-all ease-in duration-100"/>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Message</DialogTitle>
        <form onSubmit={onSubmit} className="flex flex-col space-y-5 py-3">
          <div className="grid grid-cols-2 grid-rows-1 gap-5">
            <div className="inline-flex flex-col space-y-2 items-start">
              <label htmlFor="">First Name</label>
              <Input {...register("firstName")} type="text"/>
            </div>
            <div className="inline-flex flex-col space-y-2 items-start">
              <label htmlFor="">Last Name</label>
              <Input {...register("lastName")} type="text"/>
            </div>
          </div>
          <div className="inline-flex flex-col space-y-2 items-start">
            <label htmlFor="email-message">Message</label>
            <TextArea {...register("message")} id="email-message"/>
          </div>
          {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
          <div className="flex flex-row-reverse  sm:flex-row sm:justify-end sm:space-x-2">
            <Button type="submit">Send</Button>
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}