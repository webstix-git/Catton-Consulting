import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <div className="home">
      <SiteHeader />
      <main id="main-content" className="not-found-page">
        <div className="wrap">
          <span className="eyebrow">404 error</span>
          <h1 className="display">Page not found</h1>
          <p>The page may have moved or the link may be incorrect. Let&apos;s get you back on track.</p>
          <div className="not-found-actions">
            <Link className="btn btn-gold" href="/">Back to home <span aria-hidden="true">→</span></Link>
            <Link className="btn btn-outline" href="/#services">View services</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
