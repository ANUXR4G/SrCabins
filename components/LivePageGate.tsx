"use client";

import dynamic from "next/dynamic";

const LivePageClient = dynamic(
  () => import("./LivePage").then((m) => m.LivePage),
  { ssr: false, loading: () => <div id="wrap_all" style={{ minHeight: "100vh" }} /> },
);

export function LivePage(props: {
  headerHtml: string;
  mainHtml: string;
  footerHtml: string;
}) {
  return <LivePageClient {...props} />;
}
