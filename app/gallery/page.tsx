import type { Metadata } from "next";
import Image from "next/image";
import { PageBanner } from "@/components/ServiceCard";
import { galleryImages } from "@/lib/site-data";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        title="Gallery"
        image="/images/2025_09_accommodation-cabins.jpeg"
      />
      <section className="py-16 md:py-20">
        <div className="container-site grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src) => (
            <div
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image
                src={src}
                alt="Gallery image"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
