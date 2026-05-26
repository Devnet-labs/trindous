import {
  ListChecks,
  Car,
  Sparkles,
  ShoppingBag,
  Briefcase,
  Hotel,
  Network,
  CalendarCheck,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { Product } from "@/lib/products";

const map: Record<Product["iconKey"], LucideIcon> = {
  tasks: ListChecks,
  car: Car,
  skin: Sparkles,
  shop: ShoppingBag,
  portfolio: Briefcase,
  hotel: Hotel,
  startup: Network,
  booking: CalendarCheck,
  finance: Wallet,
};

export default function ProductIcon({
  iconKey,
  size = 22,
  className,
}: {
  iconKey: Product["iconKey"];
  size?: number;
  className?: string;
}) {
  const Icon = map[iconKey];
  return <Icon size={size} className={className} />;
}
