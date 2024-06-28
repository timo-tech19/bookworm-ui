"use client";

import { Home, Library, UserCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/components/ui/logo";
import { cn } from "@/lib/utils";

const navlinks = [
  {
    label: "Overview",
    href: "/overview",
    icon: Home,
  },
  {
    label: "Reading List",
    href: "/reading-list",
    icon: Library,
  },
  {
    label: "Account",
    href: "/account",
    icon: UserCircle,
  },
];

export default function SideNav() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="p-2 w-64">
      <div className="mt-4 text-center">
        <Logo size="large" />
      </div>

      <nav className="mt-8 flex flex-col gap-2">
        {navlinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "flex items-center px-4 py-2 text-sm font-medium rounded-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors",
                link.href === pathname &&
                  "bg-slate-50 text-slate-900 font-semibold"
              )}
            >
              <Icon className="mr-4" />
              <span className="">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
