import Hero from "@/components/landing-page/hero";
import LandingPageNavbar from "@/components/navs/landing-nav";

export const runtime = "edge";

export default async function Page() {
  return (
    <>
      <LandingPageNavbar />
      <main className="flex flex-col gap-20 item-center min-h-screen">
        <Hero />
      </main>
    </>
  );
}
