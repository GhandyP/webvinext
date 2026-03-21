import { buildMetadata } from "../lib/seo";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "../lib/site-config";
import "./globals.css";

const seoData = buildMetadata({
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  path: "/",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: seoData.title,
  description: seoData.description,
  alternates: {
    canonical: seoData.canonical,
  },
  openGraph: seoData.openGraph,
  twitter: seoData.twitter,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
