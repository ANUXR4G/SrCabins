import { LivePage } from "@/components/LivePageGate";
import {
  title,
  headerHtml,
  mainHtml,
  footerHtml,
} from "@/lib/live-html/contact";

export const metadata = { title };

export default function ContactPage() {
  return (
    <LivePage
      headerHtml={headerHtml}
      mainHtml={mainHtml}
      footerHtml={footerHtml}
    />
  );
}
