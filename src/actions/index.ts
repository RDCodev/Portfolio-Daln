import { Resend } from "resend";
import { ActionError, defineAction } from "astro:actions";
import Handlebars from "handlebars";
import notification from "@templates/notification.hbs?raw";
import type { MailSenderValues } from "@ui/home/mail-sender-modal/mail-sender";
import { parseName } from "@utils/common";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: "json",
    handler: async ({ email, message, ...rest }: MailSenderValues) => {

      const template = Handlebars.compile(notification);

      const { data, error } = await resend.emails.send({
        to: ["rkostalin@gmail.com"],
        from: "Daln.dev <server@daln.dev>",
        subject: "Daln.dev - Message",
        html: template({
          receipt: parseName(rest),
          receiptEmail: email,
          message
        })
      });

      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message
        })
      };

      return data;
    }
  })
}