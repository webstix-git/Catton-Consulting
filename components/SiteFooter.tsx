export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-bot">
          <p className="copyline">© <span id="yr">{new Date().getFullYear()}</span> Catton Consulting. All rights reserved.</p>
          <p className="design-credit">Website Design by <a href="https://www.webstix.com/" target="_blank" rel="noopener" aria-label="Webstix"><span className="webstix-mark"><img src="/assets/webstix-logo.png" alt="Webstix" /></span></a></p>
        </div>
      </div>
    </footer>
  );
}
