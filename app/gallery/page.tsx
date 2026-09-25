import { LivePage } from "@/components/LivePageGate";
import {
  title,
  headerHtml,
  mainHtml,
  footerHtml,
} from "@/lib/live-html/gallery";

export const metadata = { title };

export default function GalleryPage() {
  return (
    <LivePage
      headerHtml={headerHtml}
      mainHtml={mainHtml}
      footerHtml={footerHtml}
    />
  );
}
