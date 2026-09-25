import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
  YoutubeIcon,
} from "@/components/SocialIcons";
import { badges, services, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="border-b border-white/10">
        <div className="container-site flex flex-wrap items-center justify-center gap-6 py-6">
          {badges.map((badge) => (
            <Image
              key={badge.alt}
              src={badge.src}
              alt={badge.alt}
              width={110}
              height={70}
              className="h-14 w-auto rounded bg-white object-contain p-1"
            />
          ))}
        </div>
      </div>

      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src={site.footerLogo}
            alt={site.name}
            width={180}
            height={56}
            className="mb-4 h-14 w-auto object-contain"
          />
          <p className="text-sm text-white/75">
            Established in 2021, S. R. Portable Cabins has swiftly emerged as a
            leading Manufacturer and Supplier, renowned for delivering
            high-quality, durable, and cost-effective portable cabin solutions.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold">Product</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {services.slice(0, 7).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="hover:text-primary"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Gallery", "/gallery"],
              ["Services", "/services"],
              ["Clients", "/clients"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold">Contact us</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{site.phoneDisplay}</span>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
          <div className="mt-4 flex gap-2">
            {[
              [site.social.facebook, FacebookIcon, "Facebook"],
              [site.social.instagram, InstagramIcon, "Instagram"],
              [site.social.youtube, YoutubeIcon, "Youtube"],
              [site.social.linkedin, LinkedinIcon, "LinkedIn"],
              [site.whatsapp, WhatsappIcon, "WhatsApp"],
            ].map(([href, Icon, label]) => (
              <a
                key={String(label)}
                href={String(href)}
                aria-label={String(label)}
                className="grid size-9 place-items-center rounded-full bg-white/10 hover:bg-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-white/65">
        © {new Date().getFullYear()} All Rights Reserved. {site.name}
      </div>
    </footer>
  );
}
