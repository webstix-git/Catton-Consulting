import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "AI Readiness Consulting Services",
  alternates: { canonical: "/ai-readiness" },
  description:
    "Prepare your business for responsible AI adoption with workflow reviews, use-case prioritization, practical guardrails and an actionable roadmap.",
};

const readinessServices = [
  {
    title: "Workflow and opportunity review",
    text: "Identify repetitive administrative and financial workflows where AI could save time without compromising accuracy or client trust.",
  },
  {
    title: "Use-case prioritization",
    text: "Separate useful, low-risk opportunities from ideas that need more oversight, better data or a human decision-maker in the loop.",
  },
  {
    title: "Responsible-use guardrails",
    text: "Create practical guidelines for confidentiality, verification, access, approved tools and appropriate handling of business information.",
  },
  {
    title: "Adoption roadmap",
    text: "Turn the review into a clear next-step plan with owners, priorities and checkpoints your business can realistically maintain.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Readiness Services",
  serviceType: "AI readiness consulting",
  url: "https://catton.com/ai-readiness",
  description:
    "Workflow review, use-case prioritization, responsible-use guardrails and adoption planning for growing businesses.",
  provider: { "@id": "https://catton.com/#business" },
  areaServed: "Spring Grove, Minnesota",
};

export default function AiReadinessPage() {
  return (
    <div className="home">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main id="main-content" className="service-page">
        <section className="service-hero">
          <div className="wrap">
            <span className="eyebrow">AI readiness</span>
            <h1>Make AI useful, responsible and ready for work.</h1>
            <p>
              Catton Consulting helps growing businesses understand where AI can support their day-to-day work,
              where human review is essential and what to do next.
            </p>
            <div className="service-actions">
              <a className="btn btn-primary" href="mailto:lisa@catton.com">Start a conversation <span aria-hidden="true">→</span></a>
              <a className="btn btn-ghost" href="tel:+16128657443">Call 612-865-7443</a>
            </div>
          </div>
        </section>

        <section className="service-intro" aria-labelledby="readiness-overview">
          <div className="wrap service-intro-grid">
            <div>
              <span className="eyebrow">A practical starting point</span>
              <h2 id="readiness-overview">Readiness before rollout.</h2>
            </div>
            <p>
              AI adoption works best when it starts with a clear business problem, reliable information and a review
              process people can follow. We help you build that foundation before tools and workflows become part of
              the business.
            </p>
          </div>
        </section>

        <section className="service-offerings" aria-labelledby="readiness-services">
          <div className="wrap">
            <div className="service-section-heading">
              <span className="eyebrow">What we help with</span>
              <h2 id="readiness-services">A clearer path to responsible adoption.</h2>
            </div>
            <div className="service-offering-grid">
              {readinessServices.map((service, index) => (
                <article className="service-offering" key={service.title}>
                  <span className="service-offering-number">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-principles" aria-labelledby="readiness-principles">
          <div className="wrap">
            <div className="service-principles-panel">
              <span className="eyebrow">Our standard</span>
              <h2 id="readiness-principles">Human judgment stays in the room.</h2>
              <p>
                AI can support research, drafting, administration and review. It does not replace professional
                judgment, client communication, verification or accountability. Sensitive client information should
                never be entered into public AI tools without appropriate safeguards.
              </p>
              <a className="promise-link" href="/ai-policy">Read our AI Policy <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="service-contact" aria-labelledby="readiness-contact">
          <div className="wrap">
            <span className="eyebrow">Let&apos;s talk</span>
            <h2 id="readiness-contact">Start with the workflow you want to improve.</h2>
            <p>Tell us what is taking time, creating risk or slowing your team down.</p>
            <a className="btn btn-gold" href="mailto:lisa@catton.com">Email lisa@catton.com <span aria-hidden="true">→</span></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
