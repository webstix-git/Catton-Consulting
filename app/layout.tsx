import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://catton.com"),
  title: {
    default: "Catton Consulting | Bookkeeping, Payroll & Financial Reporting",
    template: "%s | Catton Consulting",
  },
  description:
    "Catton Consulting handles bookkeeping, financial statements, AP/AR, reconciliations, payroll and sales tax so you can focus on the strategic decisions that grow your business.",
  verification: {
    google: "ByCp0zZHYo6XTX04OeFX4kmyenWJD9XuA8I-U9SKopU",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body>{children}</body>
      {gtmId ? (
        <>
          <Script id="google-tag-manager-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || []; window.gtag = function(){window.dataLayer.push(arguments);}; window.gtag('js', new Date());`}
          </Script>
          <Script
            id="google-tag-manager"
            src={`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`}
            strategy="afterInteractive"
          />
        </>
      ) : null}
      {gaId ? (
        <>
          <Script
            id="google-analytics"
            src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`}
            strategy="beforeInteractive"
          />
          <Script id="google-analytics-config" strategy="beforeInteractive">
            {`window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`}
          </Script>
        </>
      ) : null}
    </html>
  );
}
