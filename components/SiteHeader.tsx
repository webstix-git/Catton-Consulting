"use client";

import { useEffect, useState } from "react";

type SiteHeaderProps = {
  home?: boolean;
};

export function SiteHeader({ home = false }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(!home);
  const to = (hash: string) => (home ? hash : `/${hash}`);

  useEffect(() => {
    if (!home) return;
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [home]);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}${open ? " open" : ""}`} id="nav">
      <div className="wrap">
        <a href={home ? "#top" : "/"} className="logo" aria-label="Catton Consulting home">
          Catton <span>Consulting</span>
        </a>
        <nav aria-label="Primary">
          <ul>
            <li><a href={to("#top")} className={home ? "is-current" : undefined} onClick={() => setOpen(false)}>Home</a></li>
            <li><a href={to("#services")} onClick={() => setOpen(false)}>Services</a></li>
            <li><a href={to("#approach")} onClick={() => setOpen(false)}>Approach</a></li>
            <li><a href={to("#outcomes")} onClick={() => setOpen(false)}>Why Catton</a></li>
            <li><a href={to("#faq")} onClick={() => setOpen(false)}>FAQs</a></li>
          </ul>
        </nav>
        <a className="nav-phone" href="tel:+15074983086" aria-label="Call 507-498-3086">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92z" /></svg>
          507-498-3086
        </a>
        <button className="menu-btn" id="menuBtn" type="button" aria-expanded={open} aria-controls="nav" onClick={() => setOpen((value) => !value)}>Menu</button>
      </div>
    </header>
  );
}
