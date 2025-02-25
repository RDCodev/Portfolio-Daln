import { Resend } from "resend";
import { ActionError, defineAction } from "astro:actions";
import { parseName } from "@utils/common";
import Handlebars from "handlebars";
import msgTemplate from "@resources/handlebars-templates/message-notification.hbs?raw";
import type { MailSenderValues } from "@ui/home/mail-sender-modal/mail-sender";

export interface Env {
  env: { RESEND_API_KEY: string; }
}

const resendApiKey = import.meta.env.RESEND_API_KEY;

export const server = {
  send: defineAction({
    accept: "json",
    handler: async ({ email, message, ...rest }: MailSenderValues, ctx) => {      

      const { env } = (ctx.locals as { [key: string]: Env }).runtime;

      const resend = new Resend(resendApiKey || env.RESEND_API_KEY);

      const template = Handlebars.compile(msgTemplate);

      const { data, error } = await resend.emails.send({
        to: ["rkostalin@gmail.com"],
        from: "Daln.dev <server@daln.dev>",
        subject: "Hi there! You've got a new message!",
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