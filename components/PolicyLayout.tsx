import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type PolicyLayoutProps = {
  eyebrow: string;
  title: string;
  lede: string;
  ledeWidth: number;
  canonicalPath: string;
  children: ReactNode;
};

export function PolicyLayout({ eyebrow, title, lede, ledeWidth, canonicalPath, children }: PolicyLayoutProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: lede,
    url: `https://catton.com${canonicalPath}`,
    isPartOf: { "@id": "https://catton.com/#website" },
    about: { "@id": "https://catton.com/#business" },
  };

  return (
    <div className="home">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="policy-page" id="main-content">
        <section className="policy-hero">
          <div className="wrap">
            <span className="eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p style={{ maxWidth: ledeWidth }}>{lede}</p>
          </div>
        </section>
        <div className="policy">
          <div className="wrap">
            <article className="content">
              {children}
            </article>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
