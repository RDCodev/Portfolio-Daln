import { Resend } from "resend";
import { ActionError, defineAction } from "astro:actions";
import { parseName } from "@utils/common";
import { getSecret } from "astro:env/server"
import msgTemplate from "@resources/handlebars-templates/message-notification.hbs?raw";
import Mustache from "mustache";
import type { MailSenderValues } from "@ui/home/mail-sender-modal/mail-sender";

const resend = new Resend(getSecret("RESEND_API_KEY"));

export const server = {
  send: defineAction({
    accept: "json",
    handler: async ({ email, message, ...rest }: MailSenderValues) => {

      const { data, error } = await resend.emails.send({
        to: ["rkostalin@gmail.com"],
        from: "Daln.dev <server@daln.dev>",
        subject: "Hi there! You've got a new message!",
        html: Mustache.render(msgTemplate, {
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