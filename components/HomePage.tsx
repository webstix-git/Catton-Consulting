import { HomeMotion } from "@/components/HomeMotion";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function HomePage() {
  return (
    <div className="home">
      <HomeMotion />
      <SiteHeader home />

      <main id="top">
        <section className="hero">
          <div className="hero-photo">
            <img src="/assets/hero-banner.jpg" alt="Financial professional working at her desk" />
          </div>
          <div className="wrap">
            <div className="hero-copy">
              <span className="hero-kicker rv">Spring Grove, Minnesota</span>
              <h1 className="display rv in-lines">
                <span className="line-mask"><span>Focus on Growing</span></span>
                <span className="line-mask"><span>Your Business.</span></span>
                <span className="line-mask"><span className="hero-gold">We&apos;ll Handle the Rest.</span></span>
              </h1>
              <p className="hero-lede rv d1">Catton Consulting takes the daily weight of accounting off your desk, so you can put your energy where you&apos;re strongest: creating, innovating and growing your business.</p>
              <div className="actions rv d2">
                <a href="#services" className="btn btn-gold">See our services <span className="arr" aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
        </section>

        <section className="dark statement" id="reality" aria-labelledby="st-h">
          <div className="wrap statement-grid">
            <div className="statement-copy rv">
              <span className="eyebrow">The reality</span>
              <h2 className="h2" id="st-h"><span className="heading-line">The Books Never Stop.</span><span className="heading-line">Neither Do You.</span></h2>
              <p>Daily accounting tasks take a significant amount of time and energy. Bookkeeping, invoicing, payables, budgeting and payroll pile up quickly, and the responsibilities that really move your business are the first to slip.</p>
              <div className="statement-shift">
                <span className="shift-label">The better handoff</span>
                <p className="turn">Hand the list to us.<br /><strong>Keep the strategy for yourself.</strong></p>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services" aria-labelledby="sv-h">
          <div className="wrap services-layout">
            <div className="services-head rv">
              <div className="rv">
                <span className="eyebrow">Services</span>
                <h2 className="h2" id="sv-h">Five Disciplines.<br />One Steady Hand.</h2>
              </div>
              <p className="lede">
                <span className="services-lede-line">From the first invoice to the final balance sheet, we handle the core</span>
                <span className="services-lede-line">financial operations that keep a business accurate, compliant and ready for what&apos;s next.</span>
              </p>
            </div>
            <div className="service-list">
              <article className="service-line rv">
                <span className="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 2h9l3 3v17H6z" /><path d="M14 2v4h4M9 11h6M9 15h6M9 19h4" /></svg></span>
                <div className="service-line-content">
                  <div className="service-line-head"><h3>Financial Statement Preparation</h3><span className="service-category">Core reporting</span></div>
                  <p>Income statements, profit and loss reports and balance sheets prepared accurately and on time. Clear, bank-ready financials help you secure funding, plan ahead and make confident decisions.</p>
                  <div className="service-tags"><span>Income statements</span><span>Profit and loss</span><span>Balance sheets</span></div>
                </div>
              </article>
              <article className="service-line rv d1">
                <span className="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 5h16v14H4zM7 9h6M7 13h10M7 17h7" /><path d="m16 7 2 2 3-3" /></svg></span>
                <div className="service-line-content">
                  <div className="service-line-head"><h3>Accounts Payable and Receivable</h3><span className="service-category">Cash flow</span></div>
                  <p>Bills paid on schedule, invoices sent and followed up. We manage both sides of your cash flow so vendors stay happy and money owed to you arrives.</p>
                  <div className="service-tags"><span>Invoicing</span><span>Bill pay</span><span>Collections follow-up</span></div>
                </div>
              </article>
              <article className="service-line rv d2">
                <span className="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 7h16M4 17h16M7 4v6M17 14v6" /><circle cx="7" cy="15" r="2" /><circle cx="17" cy="9" r="2" /></svg></span>
                <div className="service-line-content">
                  <div className="service-line-head"><h3>Bank and Credit Card Reconciliations</h3><span className="service-category">Accuracy</span></div>
                  <p>Every account matched to the penny, every month. Reconciliations catch errors, duplicate charges and discrepancies long before they become problems.</p>
                  <div className="service-tags"><span>Bank accounts</span><span>Credit cards</span><span>Monthly close</span></div>
                </div>
              </article>
              <article className="service-line rv">
                <span className="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 8h5M18.5 5.5v5" /></svg></span>
                <div className="service-line-content">
                  <div className="service-line-head"><h3>Payroll Processing and Payroll Taxes</h3><span className="service-category">People</span></div>
                  <p>Your team paid correctly and on time, with payroll taxes calculated, withheld and remitted. One less deadline for you to track.</p>
                  <div className="service-tags"><span>Payroll runs</span><span>Tax withholding</span><span>Filings</span></div>
                </div>
              </article>
              <article className="service-line rv d1">
                <span className="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 2h12v20l-3-2-3 2-3-2-3 2z" /><path d="M9 7h6M9 11h6M9 15h4" /></svg></span>
                <div className="service-line-content">
                  <div className="service-line-head"><h3>Sales Tax Payment Processing</h3><span className="service-category">Compliance</span></div>
                  <p>Sales tax tracked, prepared and paid on schedule, so you stay compliant without the last-minute scramble.</p>
                  <div className="service-tags"><span>Tracking</span><span>Payment processing</span><span>Compliance</span></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="dark cta" id="contact" aria-labelledby="ct-h">
          <div className="wrap cta-grid">
            <div className="rv">
              <span className="eyebrow">Let&apos;s talk</span>
              <h2 className="display" id="ct-h"><span className="heading-line">Focus on What</span><span className="heading-line"><em>Only You</em> Can Do.</span></h2>
              <p className="l">Tell us a little about your business with a no-pressure consultation.</p>
              <div className="contact-lines" aria-label="Contact details">
                <div className="contact-item">
                  <a className="contact-link" href="tel:+16128657443" aria-label="Call 612-865-7443">
                    <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M10 18h4" /></svg>
                    <span className="contact-value">612-865-7443</span>
                  </a>
                </div>
                <div className="contact-item">
                  <a className="contact-link" href="mailto:lisa@catton.com" aria-label="Email lisa@catton.com">
                    <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                    <span className="contact-value">lisa@catton.com</span>
                  </a>
                </div>
                <div className="contact-item">
                  <a className="contact-link" href="https://www.google.com/maps/search/?api=1&query=18666+County+Road+4%2C+Spring+Grove%2C+MN+55974" target="_blank" rel="noopener" aria-label="Open office address in Google Maps">
                    <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="2.5" /></svg>
                    <address className="contact-value">18666 County Road 4<br />Spring Grove, MN 55974</address>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter home />
    </div>
  );
}
