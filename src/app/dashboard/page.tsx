import { redirect } from "next/navigation";
import { auth, signOut } from "@/server/auth";

import { Button } from "@/components/ui/button";

export default async function Dashboard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center gap-4 py-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-gray-700">
          Get started by editing{" "}
          <code className="font-mono">src/app/dashboard/page.tsx</code>
        </p>
        <form
          action={async () => {
            "use server";
            await signOut({
              redirectTo: "/",
            });
          }}
        >
          <Button className="mt-4">Sign out</Button>
        </form>
      </div>
    </div>
  );
}
