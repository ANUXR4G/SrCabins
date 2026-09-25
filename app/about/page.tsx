import type { Metadata } from "next";
import Image from "next/image";
import { PageBanner } from "@/components/ServiceCard";
import { aboutContent, whyChoose } from "@/lib/site-data";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" image={aboutContent.heroImage} />
      <section className="py-16 md:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={aboutContent.image}
              alt="About SR Cabins"
              width={900}
              height={650}
              className="w-full object-cover"
            />
          </div>
          <div>
            <p className="section-kicker">About SR Cabins</p>
            <h2 className="section-title">About Us</h2>
            {aboutContent.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="mb-4 text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft py-16">
        <div className="container-site grid gap-5 md:grid-cols-3">
          {aboutContent.pillars.map((pillar) => (
            <div key={pillar.title} className="card-shadow rounded-xl bg-white p-6">
              <h3 className="mb-3 text-xl font-bold text-primary-dark">
                {pillar.title}
              </h3>
              <p className="text-muted">{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container-site grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((item) => (
            <div key={item.title} className="card-shadow rounded-xl bg-white p-5">
              <Image
                src={item.icon}
                alt={item.title}
                width={56}
                height={56}
                className="mb-4 h-12 w-12 object-contain"
              />
              <h3 className="mb-2 font-bold text-primary-dark">{item.title}</h3>
              <p className="text-sm text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
