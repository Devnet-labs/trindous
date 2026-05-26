"use client";

import Link from "next/link";

export default function LiveProjectButton({
  href = "/products",
  label = "Explore Product",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <Link href={href} className="btn-ghost">
      {label}
    </Link>
  );
}
