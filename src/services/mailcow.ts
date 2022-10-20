import MailcowClient from "ts-mailcow-api";
import { MailcowResponse } from "ts-mailcow-api/src/types";

if (!process.env.MAILCOW_HOST) throw new Error("MAILCOW_HOST is not defined");
if (!process.env.MAILCOW_TOKEN) throw new Error("MAILCOW_TOKEN is not defined");

const mailcow = new MailcowClient(
  process.env.MAILCOW_HOST,
  process.env.MAILCOW_TOKEN
);

export function createMailbox(
  username: string,
  email_firstpart: string,
  password: string
): Promise<MailcowResponse> {
  return mailcow.mailbox.create({
    domain: "cubyx.eu",
    password,
    name: `${username} @ Cubyx`,
    active: 1,
    local_part: email_firstpart,
    quota: 2048,
    tls_enforce_in: true,
    tls_enforce_out: true,
    force_pw_update: false,
    password2: password,
  });
}

export default mailcow;
