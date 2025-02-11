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

export const MailSender: React.FC = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button className="ml-5" variant="raw" size="icon" target="_blank" href="#mail">
        <AtSign className="text-woodsmoke-950 dark:text-woodsmoke-400 hover:scale-125 transition-all ease-in duration-100"/>
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogTitle>Message</DialogTitle>
      <div className="flex flex-col space-y-3 py-3">
        <div className="grid grid-cols-2 grid-rows-1 gap-5">
          <div>
            <label htmlFor="">First Name</label>
            <Input type="text" className="mt-2.5"/>
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <Input type="text" className="mt-2.5"/>
          </div>
        </div>
        <div>
          <label htmlFor="email-message">Message</label>
          <TextArea className="mt-2.5" id="email-message"/>
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