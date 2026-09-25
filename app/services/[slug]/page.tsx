import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageBanner } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { getService, services } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return service
    ? { title: service.title, description: service.excerpt }
    : {};
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageBanner title={service.title} image={service.image} />
      <section className="py-16 md:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-8 overflow-hidden rounded-2xl">
              <Image
                src={service.image}
                alt={service.title}
                width={1000}
                height={700}
                className="w-full object-cover"
              />
            </div>
            <h2 className="section-title">{service.title}</h2>
            {service.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mb-4 text-muted">
                {paragraph}
              </p>
            ))}
            <Link href="/contact" className="btn-accent mt-4 inline-flex">
              Enquire Now
            </Link>
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <ContactForm />
            <div className="card-shadow mt-6 rounded-xl bg-soft p-5">
              <h4 className="mb-3 font-bold text-primary-dark">Other Services</h4>
              <ul className="space-y-2 text-sm">
                {services
                  .filter((s) => s.slug !== service.slug)
                  .slice(0, 6)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="text-muted hover:text-primary"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
