export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-bot">
          <p className="copyline">© <span id="yr">{new Date().getFullYear()}</span> Catton Consulting. All rights reserved.</p>
          <nav className="footer-links" aria-label="Footer">
            <a href="/">Home</a>
            <a href="/#services">Services</a>
            <a href="/#contact">Contact</a>
          </nav>
          <p className="design-credit">Website Design by <a href="https://www.webstix.com/" target="_blank" rel="noopener" aria-label="Webstix"><span className="webstix-mark"><img src="/assets/webstix-logo.png" alt="Webstix" loading="lazy" decoding="async" /></span></a></p>
        </div>
      </div>
      <a className="back-to-top" href="#main-content" aria-label="Back to top">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
      </a>
    </footer>
  );
}
