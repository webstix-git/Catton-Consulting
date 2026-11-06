import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Accounting Services Index",
  alternates: { canonical: "/service-index" },
  description:
    "Bookkeeping, financial statements, AP/AR, reconciliations, payroll and sales tax support from Catton Consulting in Spring Grove, MN.",
};

const services = [
  {
    title: "Financial Statement Preparation",
    description:
      "Accurate income statements, profit and loss reports and balance sheets prepared on time for planning, funding and confident business decisions.",
    details: ["Income statements", "Profit and loss reports", "Balance sheets", "Bank-ready financials"],
  },
  {
    title: "Accounts Payable and Receivable",
    description:
      "Bills paid on schedule, invoices sent and followed up, and both sides of your cash flow kept organized.",
    details: ["Invoicing", "Bill pay", "Collections follow-up", "Cash-flow support"],
  },
  {
    title: "Bank and Credit Card Reconciliations",
    description:
      "Accounts matched each month to help identify errors, duplicate charges and discrepancies before they become larger problems.",
    details: ["Bank accounts", "Credit cards", "Monthly close", "Discrepancy review"],
  },
  {
    title: "Payroll Processing and Payroll Taxes",
    description:
      "Payroll runs managed so your team is paid correctly and on time, with payroll taxes calculated, withheld and remitted.",
    details: ["Payroll runs", "Tax withholding", "Payroll tax filings", "Deadline support"],
  },
  {
    title: "Sales Tax Payment Processing",
    description:
      "Sales tax tracked, prepared and paid on schedule to support accurate, timely compliance.",
    details: ["Sales tax tracking", "Payment processing", "Compliance support", "Scheduled payments"],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Catton Consulting Accounting Services Index",
  url: "https://catton.com/service-index",
  description:
    "A complete index of Catton Consulting's bookkeeping, financial reporting, payroll and tax-support services.",
  about: { "@id": "https://catton.com/#business" },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: { "@type": "Service", name: service.title, provider: { "@id": "https://catton.com/#business" } },
    })),
  },
};

export default function ServiceIndexPage() {
  return (
    <div className="home">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main id="main-content" className="service-index-page">
        <section className="service-hero">
          <div className="wrap">
            <span className="eyebrow">Service index</span>
            <h1>Steady financial support for growing businesses.</h1>
            <p>
              Catton Consulting handles the accounting work behind the scenes so you can focus on the decisions that
              move your business forward.
            </p>
            <div className="service-actions">
              <a className="btn btn-gold" href="mailto:lisa@catton.com">Start a conversation <span aria-hidden="true">→</span></a>
              <a className="btn btn-ghost service-hero-ghost" href="tel:+16128657443">Call 612-865-7443</a>
            </div>
          </div>
        </section>

        <section className="service-index-section" aria-labelledby="business-information">
          <div className="wrap service-index-business">
            <div>
              <span className="eyebrow">Business information</span>
              <h2 id="business-information">Catton Consulting</h2>
            </div>
            <dl className="business-details">
              <div><dt>Industry</dt><dd>Bookkeeping and accounting support</dd></div>
              <div><dt>Location</dt><dd>18666 County Road 4, Spring Grove, MN 55974</dd></div>
              <div><dt>Phone</dt><dd><a href="tel:+16128657443">612-865-7443</a></dd></div>
              <div><dt>Email</dt><dd><a href="mailto:lisa@catton.com">lisa@catton.com</a></dd></div>
              <div><dt>Website</dt><dd><a href="https://catton.com">catton.com</a></dd></div>
            </dl>
          </div>
        </section>

        <section className="service-index-section service-index-services" aria-labelledby="our-services">
          <div className="wrap">
            <div className="service-section-heading">
              <span className="eyebrow">Our services</span>
              <h2 id="our-services">The financial operations that keep a business moving.</h2>
            </div>
            <div className="service-index-grid">
              {services.map((service, index) => (
                <article className="service-index-card" key={service.title}>
                  <span className="service-offering-number">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>{service.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-index-section" aria-labelledby="service-area">
          <div className="wrap service-index-area">
            <div>
              <span className="eyebrow">Service area</span>
              <h2 id="service-area">Based in Spring Grove, Minnesota.</h2>
            </div>
            <p>Contact Catton Consulting to confirm availability for your business and discuss the support you need.</p>
          </div>
        </section>

        <section className="service-index-contact" aria-labelledby="service-contact">
          <div className="wrap">
            <span className="eyebrow">Contact Catton Consulting</span>
            <h2 id="service-contact">Let&apos;s talk about what your business needs next.</h2>
            <p>Call 612-865-7443 or email lisa@catton.com to begin a no-pressure consultation.</p>
            <a className="btn btn-gold" href="mailto:lisa@catton.com">Email lisa@catton.com <span aria-hidden="true">→</span></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
