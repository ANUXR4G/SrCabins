import { notFound } from "next/navigation";
import { LivePage } from "@/components/LivePageGate";

const SLUGS = [
  "portable-cabins",
  "accommodation-cabins",
  "security-cabins",
  "portable-bunk-houses",
  "toilet-and-urinal-cabins",
  "cargo-shipping-container",
  "container-shops-cafes",
  "farm-house-cabins",
  "portable-shop-and-storage-cabins",
  "portable-bunk-house",
] as const;

type Slug = (typeof SLUGS)[number];

function isSlug(s: string): s is Slug {
  return (SLUGS as readonly string[]).includes(s);
}

async function loadService(slug: Slug) {
  switch (slug) {
    case "portable-cabins":
      return import("@/lib/live-html/service-portable-cabins");
    case "accommodation-cabins":
      return import("@/lib/live-html/service-accommodation-cabins");
    case "security-cabins":
      return import("@/lib/live-html/service-security-cabins");
    case "portable-bunk-houses":
      return import("@/lib/live-html/service-portable-bunk-houses");
    case "toilet-and-urinal-cabins":
      return import("@/lib/live-html/service-toilet-and-urinal-cabins");
    case "cargo-shipping-container":
      return import("@/lib/live-html/service-cargo-shipping-container");
    case "container-shops-cafes":
      return import("@/lib/live-html/service-container-shops-cafes");
    case "farm-house-cabins":
      return import("@/lib/live-html/service-farm-house-cabins");
    case "portable-shop-and-storage-cabins":
      return import("@/lib/live-html/service-portable-shop-and-storage-cabins");
    case "portable-bunk-house":
      return import("@/lib/live-html/service-portable-bunk-house");
  }
}

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isSlug(slug)) return { title: "Not found" };
  const mod = await loadService(slug);
  return { title: mod.title };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isSlug(slug)) notFound();
  const mod = await loadService(slug);
  if (!mod.mainHtml) notFound();
  return (
    <LivePage
      headerHtml={mod.headerHtml}
      mainHtml={mod.mainHtml}
      footerHtml={mod.footerHtml}
    />
  );
}
