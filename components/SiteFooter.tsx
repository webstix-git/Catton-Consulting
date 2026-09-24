import Link from "next/link";

type SiteFooterProps = {
  home?: boolean;
};

export function SiteFooter({ home = false }: SiteFooterProps) {
  const to = (hash: string) => (home ? hash : `/${hash}`);

  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div>
            <a href={home ? "#top" : "/"} className="logo">Catton <span>Consulting</span></a>
            <p style={{ marginTop: 16, maxWidth: "26em" }}>Bookkeeping, payroll and financial reporting that lets business owners focus on growth.</p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href={to("#services")}>Financial statements</a></li>
              <li><a href={to("#services")}>AP &amp; AR</a></li>
              <li><a href={to("#services")}>Reconciliations</a></li>
              <li><a href={to("#services")}>Payroll &amp; taxes</a></li>
              <li><a href={to("#services")}>Sales tax</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href={to("#approach")}>Approach</a></li>
              <li><a href={to("#outcomes")}>Why Catton</a></li>
              <li><a href={to("#faq")}>FAQs</a></li>
              <li><a href={to("#contact")}>Contact</a></li>
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
          <p className="copyline">© <span id="yr">{new Date().getFullYear()}</span> Catton Consulting. All rights reserved. <span className="sep">|</span> <Link href="/ai-policy">AI Policy</Link> <span className="sep">|</span> <Link href="/privacy-policy">Privacy Policy</Link></p>
          <p className="design-credit">Website Design by <a href="https://www.webstix.com/" target="_blank" rel="noopener" aria-label="Webstix"><span className="webstix-mark"><img src="/assets/webstix-logo.png" alt="Webstix" /></span></a></p>
        </div>
      </div>
    </footer>
  );
}
