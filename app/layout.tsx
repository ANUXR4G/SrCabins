import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "S.R. Portable Cabins",
  description:
    "Manufacturer and supplier of premium portable cabins, office cabins, storage cabins, toilet cabins and accommodation cabins.",
  icons: {
    icon: "/favicon.png",
  },
};

const HTML_CLASS =
  "html_stretched responsive av-preloader-disabled av-default-lightbox html_header_top html_logo_left html_main_nav_header html_menu_right html_large html_header_sticky html_header_shrinking html_header_topbar_active html_mobile_menu_tablet html_header_searchicon_disabled html_content_align_center html_header_unstick_top html_header_stretch_disabled html_elegant-blog html_av-submenu-hidden html_av-submenu-display-click html_av-overlay-side html_av-overlay-side-classic html_av-submenu-clone html_text_menu_active av-no-preview js_active avia_desktop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={HTML_CLASS} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Quicksand%7COpen+Sans:400,600"
        />
        <link rel="stylesheet" href="/vendor/slick.min.css" />
        <link rel="stylesheet" href="/vendor/slick-theme.min.css" />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/contact-form-7/includes/css/styles.css"
        />
        <link rel="stylesheet" href="/wp-content/themes/cabins/style.css" />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/chaty/css/chaty-front.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/uploads/dynamic_avia/avia-merged-styles-786a289aca2f9addbfeb190f316912d9.css"
        />
        <link rel="stylesheet" href="/css/live/inline-home.css" />
        <link rel="stylesheet" href="/css/live/wp-custom.css" />
      </head>
      <body
        id="top"
        className="home wp-singular page-template-default page page-id-862 wp-theme-enfold wp-child-theme-cabins rtl_columns stretched quicksand open_sans"
        itemScope
        itemType="https://schema.org/WebPage"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
