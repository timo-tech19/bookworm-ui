import { titleFont } from "@/lib/font";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "small" | "medium" | "large";
  color?: "white" | "black";
}

export default function Logo({ size = "medium", color = "black" }: LogoProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 font-semibold tracking-tight",
        titleFont.className,
        size === "small" && "text-1xl",
        size === "medium" && "text-2xl",
        size === "large" && "text-3xl",
        color === "white" ? "text-slate-50" : "text-slate-900"
      )}
    >
      Bookworm.io
    </h1>
  );
}
