import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Bookkeeping Services in Spring Grove, MN",
  alternates: { canonical: "/" },
  description:
    "Catton Consulting provides bookkeeping, financial reporting, AP/AR, reconciliations, payroll and sales tax support in Spring Grove, MN.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "@id": "https://catton.com/#business",
      name: "Catton Consulting",
      url: "https://catton.com/",
      email: "lisa@catton.com",
      telephone: "+1-612-865-7443",
      address: {
        "@type": "PostalAddress",
        streetAddress: "18666 County Road 4",
        addressLocality: "Spring Grove",
        addressRegion: "MN",
        postalCode: "55974",
        addressCountry: "US",
      },
      areaServed: "Spring Grove, Minnesota",
      description:
        "Bookkeeping, financial statements, accounts payable and receivable, bank and credit card reconciliations, payroll and sales tax processing.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Accounting and bookkeeping services",
        itemListElement: [
          "Financial Statement Preparation",
          "Accounts Payable and Receivable",
          "Bank and Credit Card Reconciliations",
          "Payroll Processing and Payroll Taxes",
          "Sales Tax Payment Processing",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://catton.com/#website",
      url: "https://catton.com/",
      name: "Catton Consulting",
      publisher: { "@id": "https://catton.com/#business" },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HomePage />
    </>
  );
}
