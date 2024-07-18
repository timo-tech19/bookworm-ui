"use client";

import EditBookModal from "@/components/modals/edit-book-modal";
import { useEffect, useState } from "react";

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <>{/* <EditBookModal /> */}</>;
}
