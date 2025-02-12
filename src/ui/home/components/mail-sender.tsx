import { Button } from "@components/button/button";
import { Dialog } from "@components/dialog/dialog";
import { DialogContent } from "@components/dialog/dialog-content";
import { DialogTitle } from "@components/dialog/dialog-title";
import { DialogTrigger } from "@components/dialog/dialog-trigger";
import { DialogClose } from "@components/dialog/dialog-close";
import { AtSign } from "lucide-react";
import { Input } from "@components/input/input";
import { TextArea } from "@components/text-area/text-area";
import { useForm } from "react-hook-form"

type MailSenderValues = {
  firstName: string;
  lastName: string;
  message: string;
}


export const MailSender: React.FC = () => {

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<MailSenderValues>({ mode: "onChange"});
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button className="ml-5" variant="raw" size="icon" target="_blank" href="#mail">
          <AtSign className="text-woodsmoke-950 dark:text-woodsmoke-400 hover:scale-125 transition-all ease-in duration-100"/>
        </Button>
      </DialogTrigger>
      <DialogContent >
        <DialogTitle>Message</DialogTitle>
        <form onSubmit={onSubmit} className="flex flex-col space-y-5 py-3">
          <div className="grid grid-cols-2 grid-rows-1 gap-5">
            <div className="relative inline-flex flex-col space-y-2 items-start">
              <label htmlFor="" className="text-sm font-medium tracking-wide">First Name*</label>
              <Input {...register("firstName", { required: true })} type="text" autoComplete="off"/>
              { errors.firstName && <small className="absolute bottom-[-20px] left-0 text-red-500 text-xs font-medium tracking-wide">Field is required</small> }
            </div>
            <div className="inline-flex flex-col space-y-2 items-start">
              <label htmlFor="" className="text-sm font-medium tracking-wide">Last Name</label>
              <Input {...register("lastName")} type="text" autoComplete="off"/>
            </div>
          </div>
          <div className="relative inline-flex flex-col items-start space-y-2">
            { errors.message && <small className="absolute bottom-[-20px] left-0 text-red-500 text-xs font-medium tracking-wide">Field is required.</small> }
            <label htmlFor="email-message" className="text-sm font-medium tracking-wide">Message*</label>
            <TextArea {...register("message", { required: true })} id="email-message"/>
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