"use client";

import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { titleFont } from "@/lib/font";
import { cn } from "@/lib/utils";

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
				<h1
					className={cn(
						"scroll-m-20 text-3xl font-semibold tracking-tight",
						titleFont.className
					)}
				>
					Bookworm.io
				</h1>
			</div>
			<div>
				<Button variant='ghost' className='font-semibold text-md'>
					Log in
				</Button>
			</div>
		</nav>
	);
};

export default Navbar;
