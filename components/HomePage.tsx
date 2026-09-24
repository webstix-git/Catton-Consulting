import Link from "next/link";
import { HomeMotion } from "@/components/HomeMotion";

export function HomePage() {
  return (
    <div className="home">
      <HomeMotion />
      <header className="nav" id="nav">
        <div className="wrap">
          <a href="#top" className="logo" aria-label="Catton Consulting home">
            Catton <span>Consulting</span>
          </a>
          <nav aria-label="Primary">
            <ul>
              <li><a href="#top" className="is-current">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#approach">Approach</a></li>
              <li><a href="#outcomes">Why Catton</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </nav>
          <a className="nav-phone" href="tel:+15074983086" aria-label="Call 507-498-3086">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92z" /></svg>
            507-498-3086
          </a>
          <button className="menu-btn" id="menuBtn" type="button" aria-expanded="false" aria-controls="nav">Menu</button>
        </div>
      </header>

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
            <div className="workload-card rv d1">
              <div className="workload-head">
                <div><span className="panel-kicker">Recurring workload</span><strong>Every Week, Something Is Due.</strong></div>
                <span className="panel-live">Always moving</span>
              </div>
              <ul className="burden" id="burden">
                <li><span className="task">Bookkeeping</span><span className="status">Daily</span></li>
                <li><span className="task">Invoicing</span><span className="status">Weekly</span></li>
                <li className="slip"><span className="task">Accounts payable</span><span className="status">Slipping</span></li>
                <li><span className="task">Budgeting</span><span className="status">Monthly</span></li>
                <li className="slip"><span className="task">Payroll &amp; taxes</span><span className="status">Slipping</span></li>
                <li className="slip"><span className="task">Growth strategy</span><span className="status">On hold</span></li>
              </ul>
              <div className="workload-foot">
                <svg viewBox="0 0 36 36" aria-hidden="true"><circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" /><path d="m11 18 4.5 4.5L25 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div><strong>Handled by Catton</strong><span>Accurate, current and ready when you need it.</span></div>
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

        <section className="bleed" id="promise" aria-labelledby="promise-h">
          <div className="bg" id="parallax" style={{ backgroundImage: "url('/assets/catton-modern-office.jpg')" }} />
          <div className="wrap">
            <div className="promise-panel rv">
              <span className="eyebrow">What accurate books make possible</span>
              <h2 className="h2" id="promise-h"><span className="heading-line">Accurate Financials.</span><span className="heading-line">Better Business Decisions.</span></h2>
              <p className="promise-lede">Bank-ready books give you a clear view of performance, stronger conversations with lenders and more time to create, innovate and improve your business.</p>
              <div className="promise-benefits">
                <div className="promise-benefit"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3h16v18H4zM8 8h8M8 12h8M8 16h5" /></svg><div><strong>Ready for Lenders</strong><span>Reliable reports when opportunity arrives.</span></div></div>
                <div className="promise-benefit"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V9M10 19V5M16 19v-7M22 19H2" /></svg><div><strong>Clear Performance</strong><span>Know what is working and what needs attention.</span></div></div>
                <div className="promise-benefit"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg><div><strong>Time to Lead</strong><span>Keep your attention on decisions that grow the business.</span></div></div>
              </div>
              <a className="promise-link" href="#approach">See how we work <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="approach" id="approach" aria-labelledby="ap-h">
          <div className="wrap approach-grid">
            <div className="approach-head rv">
              <span className="eyebrow">How we work</span>
              <h2 className="h2" id="ap-h"><span className="heading-line">Calm Rhythm</span><span className="heading-line">For Your Finances.</span></h2>
              <p className="approach-intro">A clear process replaces financial guesswork with dependable records, consistent reporting and fewer surprises.</p>
              <div className="approach-promise">Built around your monthly close</div>
            </div>
            <div className="process-list">
              <article className="process-step rv">
                <span className="step-no" aria-hidden="true">1</span>
                <div><span className="step-phase">Discovery</span><h3>Understand</h3><p>We learn how your business runs: your accounts, software, deadlines and where work is falling behind today.</p><div className="step-outcome"><span>Outcome</span><strong>Clear Scope and Priorities</strong></div></div>
              </article>
              <article className="process-step rv d1">
                <span className="step-no" aria-hidden="true">2</span>
                <div><span className="step-phase">Setup</span><h3>Organize</h3><p>We clean up and reconcile your books, then build reliable processes for payables, receivables and payroll.</p><div className="step-outcome"><span>Outcome</span><strong>Clean, Bank-Ready Systems</strong></div></div>
              </article>
              <article className="process-step rv d2">
                <span className="step-no" aria-hidden="true">3</span>
                <div><span className="step-phase">Ongoing</span><h3>Maintain</h3><p>Each month, we keep everything current and deliver the financial statements you need to know exactly where you stand.</p><div className="step-outcome"><span>Outcome</span><strong>A Dependable Monthly Close</strong></div></div>
              </article>
            </div>
          </div>
        </section>

        <section className="split" id="outcomes" aria-labelledby="oc-h">
          <div className="img rv"><img src="/assets/catton-team-collaboration.jpg" alt="A business team collaborating around a laptop" /></div>
          <div className="txt">
            <span className="eyebrow rv">Why Catton</span>
            <h2 className="h2 rv d1" id="oc-h"><span className="heading-line">Excel in Your Strengths.</span><span className="heading-line">We&apos;ll Handle the Rest.</span></h2>
            <p className="lede rv d1">Catton Consulting lets you focus on the strategic decisions crucial to running a successful business, while we keep the numbers accurate behind you.</p>
            <ul className="gains">
              <li className="rv"><span className="gain-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg></span><span className="gain-copy"><b>Time</b><span>Hours back every week from bookkeeping, invoicing and payroll.</span></span></li>
              <li className="rv d1"><span className="gain-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z" /><circle cx="12" cy="12" r="2.5" /></svg></span><span className="gain-copy"><b>Clarity</b><span>Up-to-date statements that show exactly how the business is performing.</span></span></li>
              <li className="rv d2"><span className="gain-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3 20 7v5c0 5-3.4 8-8 9-4.6-1-8-4-8-9V7z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></svg></span><span className="gain-copy"><b>Confidence</b><span>Financials ready for your bank, your lender or your next big decision.</span></span></li>
              <li className="rv d3"><span className="gain-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4M17 3v4M3 10h18m-13 5 2 2 5-5" /></svg></span><span className="gain-copy"><b>Compliance</b><span>Payroll and sales tax handled on schedule, every time.</span></span></li>
            </ul>
          </div>
        </section>

        <section className="faq" id="faq" aria-labelledby="fq-h">
          <div className="wrap faq-grid">
            <div className="intro rv">
              <span className="eyebrow">Questions</span>
              <h2 className="h2" id="fq-h">Good to Know.</h2>
              <p className="lede">
                <span className="faq-intro-line">Not sure where to start? Most clients begin with a short</span>
                <span className="faq-intro-line">conversation about what&apos;s taking up their time.</span>
              </p>
            </div>
            <div className="faq-list rv d1">
              <details className="faq-item" open><summary>What Does &quot;Bank-Ready&quot; Financials Mean?</summary><p>Accurate, reconciled income statements, profit &amp; loss reports and balance sheets, prepared in the format lenders and banks expect when you apply for credit or financing.</p></details>
              <details className="faq-item" open><summary>Can You Take Over Just One Part, Like Payroll?</summary><p>Yes. Engage us for a single service such as payroll or reconciliations, or hand over your full bookkeeping and reporting. We&apos;ll shape the scope around what you need.</p></details>
              <details className="faq-item" open><summary>My Books Are Behind. Can You Help Catch Up?</summary><p>Absolutely. We&apos;ll reconcile past months, correct errors and bring your records current, then keep them that way.</p></details>
              <details className="faq-item" open><summary>How Do We Get Started?</summary><p>Book a consultation. We&apos;ll talk through your business, your current process and where you want more time, then recommend a clear plan.</p></details>
            </div>
          </div>
        </section>

        <section className="dark cta" id="contact" aria-labelledby="ct-h">
          <div className="wrap cta-grid">
            <div className="rv">
              <span className="eyebrow">Let&apos;s talk</span>
              <h2 className="display" id="ct-h"><span className="heading-line">Focus on What</span><span className="heading-line"><em>Only You</em> Can Do.</span></h2>
              <p className="l">Tell us a little about your business. We&apos;ll follow up to set up a no-pressure consultation.</p>
              <div className="contact-lines" aria-label="Contact details">
                <div className="contact-item">
                  <a className="contact-link" href="tel:+15074983086" aria-label="Call 507-498-3086">
                    <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92z" /></svg>
                    <span className="contact-value">507-498-3086</span>
                  </a>
                </div>
                <div className="contact-item">
                  <a className="contact-link" href="tel:+16128657443" aria-label="Call mobile 612-865-7443">
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
            <form className="card rv d1" id="form" noValidate>
              <h3>Request a Consultation</h3>
              <p className="sub">We typically reply within one business day.</p>
              <div className="row2">
                <label className="field"><span>Name</span><input required name="name" autoComplete="name" /></label>
                <label className="field"><span>Company</span><input name="company" autoComplete="organization" /></label>
              </div>
              <div className="row2">
                <label className="field"><span>Email</span><input required type="email" name="email" autoComplete="email" /></label>
                <label className="field"><span>Phone</span><input type="tel" name="phone" autoComplete="tel" /></label>
              </div>
              <label className="field"><span>I need help with</span>
                <select name="service">
                  <option>Full bookkeeping &amp; reporting</option>
                  <option>Financial statements</option>
                  <option>Accounts payable / receivable</option>
                  <option>Reconciliations</option>
                  <option>Payroll &amp; payroll taxes</option>
                  <option>Sales tax</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="field"><span>Anything else?</span><textarea name="msg" rows={3} /></label>
              <button className="btn btn-primary" type="submit">Send request <span className="arr">→</span></button>
              <p className="sent" id="sent" role="status">Thank you. We&apos;ll be in touch shortly.</p>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="foot-top">
            <div>
              <a href="#top" className="logo">Catton <span>Consulting</span></a>
              <p style={{ marginTop: 16, maxWidth: "26em" }}>Bookkeeping, payroll and financial reporting that lets business owners focus on growth.</p>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Financial statements</a></li>
                <li><a href="#services">AP &amp; AR</a></li>
                <li><a href="#services">Reconciliations</a></li>
                <li><a href="#services">Payroll &amp; taxes</a></li>
                <li><a href="#services">Sales tax</a></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="#approach">Approach</a></li>
                <li><a href="#outcomes">Why Catton</a></li>
                <li><a href="#faq">FAQs</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul className="footer-contact">
                <li><a href="https://www.google.com/maps/search/?api=1&query=18666+County+Road+4%2C+Spring+Grove%2C+MN+55974" target="_blank" rel="noopener" aria-label="Open office address in Google Maps"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="2.5" /></svg><address>18666 County Road 4<br />Spring Grove, MN 55974</address></a></li>
                <li><a href="tel:+15074983086" aria-label="Call office 507-498-3086"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.7a15 15 0 0 0 4.8 4.8L15 13l5 2v4c0 .6-.4 1-1 1C10.7 20 4 13.3 4 5c0-.6.4-1 1-1z" /></svg><span>507-498-3086</span></a></li>
                <li><a href="tel:+16128657443" aria-label="Call mobile 612-865-7443"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M10 5h4M11 18h2" /></svg><span>612-865-7443</span></a></li>
                <li><a href="mailto:lisa@catton.com" aria-label="Email lisa@catton.com"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg><span>lisa@catton.com</span></a></li>
              </ul>
            </div>
          </div>
          <div className="foot-bot">
            <p className="copyline">© <span id="yr">2026</span> Catton Consulting. All rights reserved. <span className="sep">|</span> <Link href="/ai-policy">AI Policy</Link> <span className="sep">|</span> <Link href="/privacy-policy">Privacy Policy</Link></p>
            <p className="design-credit">Website Design by <a href="https://www.webstix.com/" target="_blank" rel="noopener" aria-label="Webstix"><span className="webstix-mark"><img src="/assets/webstix-logo.png" alt="Webstix" /></span></a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
