import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type PolicyLayoutProps = {
  eyebrow: string;
  title: string;
  lede: string;
  ledeWidth: number;
  children: ReactNode;
};

export function PolicyLayout({ eyebrow, title, lede, ledeWidth, children }: PolicyLayoutProps) {
  return (
    <div className="home">
      <SiteHeader />
      <main className="policy-page">
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
              <span className="updated">Effective September 24, 2026</span>
              {children}
            </article>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
