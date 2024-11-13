interface Params {
  expires: Date;
  identifier: string;
  request: Request;

  token: string;
  url: string;
}
export async function sendVerificationRequest({
  identifier: to,
  url,
}: {
  identifier: string;
  url: string;
}) {
  // const { identifier: to, url } = params;
  console.log("email triggered");

  const res = await fetch("https://api.zeptomail.in/v1.1/email/template", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Zoho-enczapikey ${process.env.ZEPTO_API_KEY}`,
    },
    body: JSON.stringify({
      mail_template_key:
        "2518b.23f9dffed3186706.k1.d7b97180-a1b2-11ef-bc44-525400ab18e6.193254b1098",
      from: {
        address: "noreply@kohi.studio",
        name: "noreply",
      },
      to: [
        {
          email_address: {
            address: to,
            // name: to,
          },
        },
      ],
      merge_info: {
        product: "Your Product Name",
        valid_time: "24 hrs",
        URL: url,
      },
    }),
  });

  if (!res.ok) {
    throw new Error("ZeptoMail error: " + JSON.stringify(await res.json()));
  }
}
