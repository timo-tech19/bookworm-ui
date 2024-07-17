import Logo from "@/components/ui/logo";

interface HeaderProps {
  label: string;
}

export function Header({ label }: HeaderProps) {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <Logo size="large" />
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
}
