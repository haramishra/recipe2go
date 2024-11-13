"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EmailAuth() {
  const [loading, setLoading] = useState(false);

  const resendAction = (formData: FormData) => {
    signIn("http-email", { email: formData.get("email") });
  };

  return (
    <form action={resendAction}>
      <Input
        name="email"
        type="email"
        placeholder={"eg: john@gmail.com"}
        className="py-6 w-full mb-3"
      />
      <Button className="w-full py-6" size={"lg"} disabled={loading}>
        {loading ? "Sending Email..." : "Send verification link"}
      </Button>
    </form>
  );
}
