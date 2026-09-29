export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div>
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li><a href="https://www.google.com/maps/search/?api=1&query=18666+County+Road+4%2C+Spring+Grove%2C+MN+55974" target="_blank" rel="noopener" aria-label="Open office address in Google Maps"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="2.5" /></svg><address>18666 County Road 4<br />Spring Grove, MN 55974</address></a></li>
              <li><a href="tel:+16128657443" aria-label="Call 612-865-7443"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M10 5h4M11 18h2" /></svg><span>612-865-7443</span></a></li>
              <li><a href="mailto:lisa@catton.com" aria-label="Email lisa@catton.com"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg><span>lisa@catton.com</span></a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bot">
          <p className="copyline">© <span id="yr">{new Date().getFullYear()}</span> Catton Consulting. All rights reserved.</p>
          <p className="design-credit">Website Design by <a href="https://www.webstix.com/" target="_blank" rel="noopener" aria-label="Webstix"><span className="webstix-mark"><img src="/assets/webstix-logo.png" alt="Webstix" /></span></a></p>
        </div>
      </div>
    </footer>
  );
}
