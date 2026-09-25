import Image from "next/image";
import Link from "next/link";
import { HeroSlider } from "@/components/HeroSlider";
import { ServiceCard } from "@/components/ServiceCard";
import {
  aboutContent,
  principles,
  services,
  stats,
  testimonials,
  whyChoose,
  clientLogos,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className="py-16 md:py-20">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={aboutContent.image}
              alt="About S.R. Portable Cabins"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="section-kicker">About Us</p>
            <h2 className="section-title">{aboutContent.title}</h2>
            <p className="mb-4 text-muted">{aboutContent.paragraphs[0]}</p>
            <p className="mb-6 text-muted">{aboutContent.paragraphs[1]}</p>
            <Link href="/about" className="btn-primary">
              Read More
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-soft py-16 md:py-20">
        <div className="container-site">
          <div className="mb-10 max-w-3xl">
            <p className="section-kicker">Why Choose Us</p>
            <h2 className="section-title">Why Choose Us</h2>
            <p className="text-muted">
              At S.R. Portable Cabins, we specialize in delivering high-quality,
              customizable portable structures that meet your exact
              requirements. Our commitment to quality, reliability, and customer
              satisfaction sets us apart in the industry.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="card-shadow rounded-xl bg-white p-5"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="mb-4 h-14 w-14 object-contain"
                />
                <h3 className="mb-2 text-lg font-bold text-primary-dark">
                  {item.title}
                </h3>
                <p className="text-sm text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-site">
          <div className="mb-10 text-center">
            <p className="section-kicker">Projects</p>
            <h2 className="section-title">Our Completed Projects</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft py-16 md:py-20">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="section-kicker">Foundation</p>
            <h2 className="section-title">{principles.title}</h2>
            <p className="mb-6 text-muted">{principles.text}</p>
            <Link href="/about" className="btn-primary">
              Read More
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={principles.image}
              alt="Our Principles"
              width={900}
              height={600}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary-dark py-14 text-white">
        <div className="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-[family-name:var(--font-sora)] text-4xl font-bold text-[#bde5f0]">
                {stat.value}
              </div>
              <div className="mt-2 text-sm uppercase tracking-wide text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-site">
          <div className="mb-10 text-center">
            <p className="section-kicker">Clients</p>
            <h2 className="section-title">Our Happy Clients</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="card-shadow flex h-28 items-center justify-center rounded-xl bg-white p-4"
              >
                <Image
                  src={logo}
                  alt="Client logo"
                  width={140}
                  height={80}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft py-16 md:py-20">
        <div className="container-site">
          <div className="mb-10 text-center">
            <p className="section-kicker">Reviews</p>
            <h2 className="section-title">Our Testimonials</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote
                key={item.name}
                className="card-shadow rounded-xl bg-white p-6"
              >
                <p className="text-muted">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-5">
                  <strong className="text-primary-dark">{item.name}</strong>
                  <div className="text-sm text-muted">{item.role}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
