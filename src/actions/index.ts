import { Resend } from "resend";
import { ActionError, defineAction } from "astro:actions";
import { parseName } from "@utils/common";
import { getSecret } from "astro:env/server"
import Handlebars from "handlebars";
import msgTemplate from "@resources/handlebars-templates/message-notification.hbs?raw";
import type { MailSenderValues } from "@ui/home/mail-sender-modal/mail-sender";

const resend = new Resend(import.meta.env.RESEND_API_KEY || getSecret("RESEND_API_KEY"));

export const server = {
  send: defineAction({
    accept: "json",
    handler: async ({ email, message, ...rest }: MailSenderValues) => {

      const template = Handlebars.compile(msgTemplate);

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