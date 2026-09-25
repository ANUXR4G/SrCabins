import type { Metadata } from "next";
import { PageBanner, ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site-data";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Services"
        image="/images/2025_09_portable-cabins.jpeg"
      />
      <section className="bg-soft py-16 md:py-20">
        <div className="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}
