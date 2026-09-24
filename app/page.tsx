import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
  description:
    "Catton Consulting handles bookkeeping, financial statements, AP/AR, reconciliations, payroll and sales tax so you can focus on the strategic decisions that grow your business.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Catton Consulting",
  url: "https://catton.com/",
  email: "lisa@catton.com",
  telephone: "+1-507-498-3086",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18666 County Road 4",
    addressLocality: "Spring Grove",
    addressRegion: "MN",
    postalCode: "55974",
    addressCountry: "US",
  },
  description:
    "Bookkeeping, financial statements, accounts payable and receivable, bank and credit card reconciliations, payroll and sales tax processing.",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HomePage />
    </>
  );
}
