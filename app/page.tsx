import { LivePage } from "@/components/LivePageGate";
import {
  title,
  headerHtml,
  mainHtml,
  footerHtml,
} from "@/lib/live-html/home";

export const metadata = { title };

export default function HomePage() {
  return (
    <LivePage
      headerHtml={headerHtml}
      mainHtml={mainHtml}
      footerHtml={footerHtml}
    />
  );
}
