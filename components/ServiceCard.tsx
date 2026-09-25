import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/site-data";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card-shadow group overflow-hidden rounded-xl bg-white">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold text-primary-dark">
          {service.title}
        </h3>
        <p className="mb-4 text-sm text-muted">{service.excerpt}</p>
        <Link
          href={`/services/${service.slug}`}
          className="text-sm font-bold text-primary hover:text-accent"
        >
          More →
        </Link>
      </div>
    </article>
  );
}

export function PageBanner({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <section className="page-banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="container-site py-16">
        <h1 className="font-[family-name:var(--font-sora)] text-4xl font-bold md:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
