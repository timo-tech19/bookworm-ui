"use client";

import { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ children }: { children: ReactNode }) {
  const status = useFormStatus();

  return (
    <Button
      className="disabled:bg-slate-700"
      type="submit"
      disabled={status.pending}
    >
      {status.pending ? "Pending..." : children}
    </Button>
  );
}
