import type { Metadata } from "next";
import Image from "next/image";
import { PageBanner } from "@/components/ServiceCard";
import { clientLogos } from "@/lib/site-data";

export const metadata: Metadata = { title: "Clients" };

export default function ClientsPage() {
  return (
    <>
      <PageBanner title="Our Clients" image="/images/2025_09_portable-cabins.jpeg" />
      <section className="bg-soft py-16 md:py-20">
        <div className="container-site grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {clientLogos.map((logo) => (
            <div
              key={logo}
              className="card-shadow flex h-32 items-center justify-center rounded-xl bg-white p-4"
            >
              <Image
                src={logo}
                alt="Client"
                width={150}
                height={90}
                className="max-h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
