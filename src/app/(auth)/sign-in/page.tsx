import { redirect } from "next/navigation";
import { Icons } from "@/icons";
import { auth, signIn } from "@/server/auth";
import { FacebookIcon, GithubIcon, Icon, TwitterIcon } from "lucide-react";
import Email from "next-auth/providers/email";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LandingPageNavbar from "@/components/navs/landing-nav";

import { EmailAuth } from "../email-auth";

export default async function signInPage() {
  return (
    <main>
      <LandingPageNavbar />
      <div className="flex items-start mt-20 md:mt-40 justify-center min-h-screen ">
        <Card className="w-full max-w-md ">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Sign in
            </CardTitle>
            <CardDescription className="text-center">
              Choose your preferred Sign in method
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <form
              action={async () => {
                "use server";
                await signIn("google", { redirectTo: "/dashboard" });
              }}
            >
              <Button variant="outline" className="w-full py-6" size={"lg"}>
                <Icons.brand.google className="mr-2  size-6" />
                Sign in with Google
              </Button>
            </form>
            <form
              action={async () => {
                "use server";
                await signIn("pinterest", { redirectTo: "/dashboard" });
              }}
            >
              <Button variant="outline" className="w-full py-6" size={"lg"}>
                <Icons.brand.pinterest className="mr-2 size-6" />
                Sign in with Pinterest
              </Button>
            </form>
            <form
              action={async () => {
                "use server";
                await signIn("facebook", { redirectTo: "/dashboard" });
              }}
            >
              <Button variant="outline" className="w-full py-6" size={"lg"}>
                <Icons.brand.facebook className="mr-2 size-6" />
                Sign in with Facebook
              </Button>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or
                </span>
              </div>
            </div>
            <EmailAuth />
            <form
              action={async (formData) => {
                "use server";
                await signIn("http-email", formData);
              }}
            >
              <Input
                name="email"
                type="email"
                placeholder={"eg: john@gmail.com"}
                className="py-6 w-full mb-3"
              />
              <Button className="w-full py-6" size={"lg"}>
                Sign in with Email
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-center text-gray-700 w-full">
              By continuing, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
