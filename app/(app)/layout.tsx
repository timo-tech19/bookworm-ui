import { UserButton } from "@/components/auth/user-button";
import SideNav from "@/components/sidenav";
import { currentUser } from "@/lib/auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  return (
    <div className="flex min-h-screen">
      <div className="flex">
        <div className="bg-primary">
          <SideNav />
        </div>
      </div>
      <div className="flex-1 flex gap-1 flex-col">
        <div className="p-4 border-b-2 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Hello, {user?.name}</h2>
          <UserButton />
        </div>
        <div className="px-4 flex-1">{children}</div>
      </div>
    </div>
  );
}
