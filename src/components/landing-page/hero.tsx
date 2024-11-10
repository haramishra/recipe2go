import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { signIn } from "@/server/auth";

export default function Hero() {
  return (
    <section className=" section-container mt-10 md:mt-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
              A social media for learners
            </p>
            <h1 className="mt-4 text-4xl font-bold  lg:mt-8 sm:text-6xl xl:text-8xl">
              Connect & learn from the experts
            </h1>
            <p className="mt-4 text-base  lg:mt-8 sm:text-xl">
              Grow your career fast with right mentor.
            </p>

            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <Button className="mt-4" size="lg">
                Get Started with Google
              </Button>
            </form>

            <p className="mt-5 text-gray-600">
              No credit card required. No commitment. No obligation.
            </p>
          </div>

          <div>
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
