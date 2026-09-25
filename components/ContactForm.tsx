"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site-data";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      String(data.get("subject") || "Website enquiry"),
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="card-shadow rounded-xl bg-white p-6 md:p-8">
      <h3 className="mb-5 text-2xl font-bold text-primary-dark">
        Get in touch with our team
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        <input
          required
          name="name"
          placeholder="Name *"
          className="rounded border border-[#d7e6ec] px-4 py-3 outline-none focus:border-primary"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="E-Mail *"
          className="rounded border border-[#d7e6ec] px-4 py-3 outline-none focus:border-primary"
        />
        <input
          name="subject"
          placeholder="Subject *"
          className="rounded border border-[#d7e6ec] px-4 py-3 outline-none focus:border-primary md:col-span-2"
        />
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Message *"
          className="rounded border border-[#d7e6ec] px-4 py-3 outline-none focus:border-primary md:col-span-2"
        />
      </div>
      <button type="submit" className="btn-primary mt-5">
        Send Message
      </button>
      {sent && (
        <p className="mt-3 text-sm font-medium text-primary">
          Opening your email client…
        </p>
      )}
    </form>
  );
}
