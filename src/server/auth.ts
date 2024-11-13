import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import Email from "next-auth/providers/email";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";
import Nodemailer from "next-auth/providers/nodemailer";
import Pinterest from "next-auth/providers/pinterest";

import { sendVerificationRequest } from "@/lib/send-verification-mail";

import { db } from "./db";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  trustHost: true,
  adapter: DrizzleAdapter(db),
  providers: [
    Google,
    Facebook,
    Pinterest,
    {
      id: "http-email",
      name: "Email",
      type: "email",
      maxAge: 60 * 60 * 24, // Email link will expire in 24 hours
      sendVerificationRequest,
    },
  ],
});
