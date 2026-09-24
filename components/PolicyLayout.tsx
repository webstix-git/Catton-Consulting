import Link from "next/link";
import type { ReactNode } from "react";

type PolicyLayoutProps = {
  eyebrow: string;
  title: string;
  lede: string;
  ledeWidth: number;
  current: "privacy" | "ai";
  children: ReactNode;
};

export function PolicyLayout({
  eyebrow,
  title,
  lede,
  ledeWidth,
  current,
  children,
}: PolicyLayoutProps) {
  return (
    <div className="policy-page">
      <header className="nav">
        <div className="wrap">
          <Link className="logo" href="/">
            Catton Consulting
          </Link>
          <Link className="back" href="/">
            Back to website
          </Link>
        </div>
      </header>
      <main>
        <section className="hero">
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
      <footer>
        <div className="wrap foot">
          <span>© 2026 Catton Consulting. All rights reserved.</span>
          <span className="foot-links">
            <Link href="/privacy-policy" aria-current={current === "privacy" ? "page" : undefined}>
              Privacy Policy
            </Link>
            <Link href="/ai-policy" aria-current={current === "ai" ? "page" : undefined}>
              AI Policy
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
