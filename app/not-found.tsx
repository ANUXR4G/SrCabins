import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Not Found" };

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[50vh] flex-col items-center justify-center py-24 text-center">
      <h1 className="section-title">Page not found</h1>
      <p className="mt-3 text-muted">The page you requested does not exist.</p>
      <Link href="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </section>
  );
}
