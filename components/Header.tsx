"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
  YoutubeIcon,
} from "@/components/SocialIcons";
import { navLinks, site } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const socials = [
    { href: site.social.facebook, icon: FacebookIcon, label: "Facebook" },
    { href: site.social.instagram, icon: InstagramIcon, label: "Instagram" },
    { href: site.social.youtube, icon: YoutubeIcon, label: "Youtube" },
    { href: site.social.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
    { href: site.whatsapp, icon: WhatsappIcon, label: "WhatsApp" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-primary-dark text-white">
        <div className="container-site flex flex-wrap items-center justify-between gap-3 py-2 text-sm">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 hover:text-[#bde5f0]"
            >
              <Mail className="size-4 text-primary" />
              {site.email}
            </a>
            <a
              href={`tel:+91${site.phones[0]}`}
              className="inline-flex items-center gap-2 hover:text-[#bde5f0]"
            >
              <Phone className="size-4 text-primary" />
              +91{site.phones[0]}
            </a>
          </div>
          <div className="flex items-center gap-2">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid size-8 place-items-center rounded-full bg-white/10 hover:bg-primary"
              >
                <Icon className="size-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-site flex items-center justify-between gap-4 py-3">
        <Link href="/" className="shrink-0">
          <Image
            src={site.logo}
            alt={site.name}
            width={220}
            height={56}
            className="h-12 w-auto object-contain md:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            if ("children" in link && link.children) {
              return (
                <div key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold ${
                      active ? "text-primary" : "text-black hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="size-4" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 min-w-64 rounded-md border border-black/5 bg-white py-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-muted hover:bg-soft hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-semibold ${
                  active ? "text-primary" : "text-black hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Menu"
          className="grid size-11 place-items-center rounded bg-primary text-white lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="size-5" />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[80] lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Close overlay"
          className={`absolute inset-0 bg-black/50 transition ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[min(360px,92vw)] flex-col bg-white transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b px-4 py-3">
            <Image src={site.logo} alt={site.name} width={160} height={40} />
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="grid size-10 place-items-center rounded-full bg-soft"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-3">
            {navLinks.map((link) => {
              if ("children" in link && link.children) {
                return (
                  <div key={link.href}>
                    <button
                      type="button"
                      onClick={() => setServicesOpen((v) => !v)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-3 font-semibold"
                    >
                      {link.label}
                      <ChevronDown
                        className={`size-4 transition ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="ml-3 border-l border-black/10 pl-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-2 py-2 text-sm text-muted"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-3 font-semibold"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </aside>
      </div>
    </header>
  );
}
