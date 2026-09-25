import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageBanner } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site-data";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" image="/images/2025_09_cargo-shipping-container.jpeg" />
      <section className="py-16 md:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <p className="section-kicker">Reach Us</p>
            <h2 className="section-title">Our Branches</h2>
            <div className="space-y-5">
              {site.branches.map((branch) => (
                <div
                  key={branch.title}
                  className="card-shadow rounded-xl border border-[#d7e6ec] bg-white p-6"
                >
                  <h3 className="mb-3 text-xl font-bold text-primary-dark">
                    {branch.title}
                  </h3>
                  <ul className="space-y-3 text-sm text-muted">
                    <li className="flex gap-2">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{branch.address}</span>
                    </li>
                    <li className="flex gap-2">
                      <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                      <a href={`mailto:${branch.email}`}>{branch.email}</a>
                    </li>
                    <li className="flex gap-2">
                      <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{branch.phone}</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
