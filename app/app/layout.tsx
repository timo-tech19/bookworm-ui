import SideNav from "@/components/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2 min-h-screen">
      <div className="flex">
        <div className="bg-slate-200">
          <SideNav />
        </div>
      </div>
      <div className="flex-1 flex gap-1 flex-col">
        <div className="bg-gray-300 p-4">Top Nav</div>
        <div className="bg-gray-400 p-4 flex-1">Main Content</div>
      </div>
    </div>
  );
}
