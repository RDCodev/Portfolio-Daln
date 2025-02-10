import { Button } from "@components/button/button";
import { Dialog } from "@components/dialog/dialog";
import { DialogContent } from "@components/dialog/dialog-content";
import { DialogFooter } from "@components/dialog/dialog-footer";
import { DialogTitle } from "@components/dialog/dialog-title";
import { DialogTrigger } from "@components/dialog/dialog-trigger";
import { DialogClose } from "@components/dialog/dialog-close";
import { AtSign } from "lucide-react";
import { Input } from "@components/input/input";

export const MailSender: React.FC = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button className="ml-5" variant="raw" size="icon" target="_blank" href="#mail">
        <AtSign className="text-woodsmoke-950 dark:text-woodsmoke-400 hover:scale-125 transition-all ease-in duration-100"/>
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogTitle>Mail Sender</DialogTitle>      
      <div className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <label htmlFor="" className="basis-auto">Subject</label>
          <Input type="text" className="basis-4/5"/>
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="" className="basis-auto">Message</label>
          <Input type="text" className="basis-4/5"/>
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Send</Button>
        <DialogClose asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);