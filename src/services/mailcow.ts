import redaxios, { Response } from "redaxios";

if (!process.env.MAILCOW_HOST) throw new Error("MAILCOW_HOST is not defined");
if (!process.env.MAILCOW_TOKEN) throw new Error("MAILCOW_TOKEN is not defined");

export function createMailbox(
  username: string,
  email_firstpart: string,
  password: string
): Promise<Response<any>> {
  return redaxios.post(
    `${process.env.MAILCOW_HOST}/api/v1/add/mailbox`,
    {
      local_part: email_firstpart,
      domain: "cubyx.eu",
      name: `${username} @ Cubyx`,
      quota: 2048,
      password,
      password2: password,
      active: 1,
      force_pw_update: 0,
      tls_enforce_in: 1,
      tls_enforce_out: 1,
    },
    {
      headers: {
        "X-API-Key": process.env.MAILCOW_TOKEN as string,
      },
    }
  );
}

export async function getMailbox(email: string): Promise<any> {
  const { data } = await redaxios.get(
    `${process.env.MAILCOW_HOST}/api/v1/get/mailbox/${email}`,
    {
      headers: {
        "X-API-Key": process.env.MAILCOW_TOKEN as string,
      },
    }
  );

  return data;
}

export async function deleteMailbox(email: string): Promise<boolean> {
  const { status } = await redaxios.post(
    `${process.env.MAILCOW_HOST}/api/v1/edit/mailbox/`,
    { items: [email], attr: { active: false } },
    {
      headers: {
        "X-API-Key": process.env.MAILCOW_TOKEN as string,
      },
    }
  );

  return status === 200;
}
