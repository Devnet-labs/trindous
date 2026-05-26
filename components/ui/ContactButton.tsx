"use client";

import Link from "next/link";
import { type ReactNode } from "react";

export default function ContactButton({
  href = "#contact",
  children = "Get a Quote",
}: {
  href?: string;
  children?: ReactNode;
}) {
  return (
    <Link href={href} className="btn-primary">
      {children}
    </Link>
  );
}
