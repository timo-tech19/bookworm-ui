import SideNav from "@/components/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <div className="flex">
        <div className="bg-slate-200">
          <SideNav />
        </div>
      </div>
      <div className="flex-1 flex gap-1 flex-col">
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Welcome Back, User</h2>
        </div>
        <div className="px-4 flex-1">{children}</div>
      </div>
    </div>
  );
}
