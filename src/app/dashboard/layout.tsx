import DashboardNav from "@/components/navs/dashboard-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <DashboardNav />
      {children}
    </main>
  );
}
