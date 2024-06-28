import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";

function LandingPage() {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center  text-center gap-y-8 flex-1 pb-10">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Track Your Books, Summaries and Build A Reading Habit.
          </h1>
          <h3 className="leading-7 text-xl">
            Take control of your life by reading consistently
          </h3>
          <Link href="/overview" className="inline-block">
            <Button size="lg" role="link" className="text-md">
              Join Bookworm Free
            </Button>
          </Link>
          <div className="flex items-center justify-center">
            <div className="relative w-[350px] h-[350px] md:h-[400px] md:w-[400px]">
              <Image
                src="/reading.svg"
                fill
                className="object-cover"
                alt="Reading"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-6">
        <Logo />
        <div>Copyright &copy; 2024, TimoTech</div>
      </div>
    </div>
  );
}

export default LandingPage;
