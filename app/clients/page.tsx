import { LivePage } from "@/components/LivePageGate";
import {
  title,
  headerHtml,
  mainHtml,
  footerHtml,
} from "@/lib/live-html/clients";

export const metadata = { title };

export default function ClientsPage() {
  return (
    <LivePage
      headerHtml={headerHtml}
      mainHtml={mainHtml}
      footerHtml={footerHtml}
    />
  );
}
