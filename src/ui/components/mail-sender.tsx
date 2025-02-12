import { Dialog } from "@components/dialog/dialog";
import { DialogTrigger } from "@components/dialog/dialog-trigger";
import { DialogContent } from "@components/dialog/dialog-content";
import { Button } from "@components/button/button";
import { AtSign } from "lucide-react";

export const MailSender = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button className="ml-5" variant="raw" size="icon" target="_blank" href="#mail">
        <AtSign className="text-woodsmoke-950 dark:text-woodsmoke-400 hover:scale-125 transition-all ease-in duration-100" />
      </Button>
    </DialogTrigger>
    <DialogContent>

    </DialogContent>
  </Dialog>
)