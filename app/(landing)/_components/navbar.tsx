"use client";

import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { titleFont } from "@/lib/font";
import { cn } from "@/lib/utils";
import Link from "next/link";

// top navbar for landing page
const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <nav
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center justify-between w-full p-6",
        scrolled && "border-b shadow-md"
      )}
    >
      <div>
        <Logo size="large" />
      </div>
      <div>
        <Link href="/auth/login">
          <Button variant="ghost" className="font-semibold text-md">
            Log in
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
