import { LivePage } from "@/components/LivePageGate";
import {
  title,
  headerHtml,
  mainHtml,
  footerHtml,
} from "@/lib/live-html/about";

export const metadata = { title };

export default function AboutPage() {
  return (
    <LivePage
      headerHtml={headerHtml}
      mainHtml={mainHtml}
      footerHtml={footerHtml}
    />
  );
}
