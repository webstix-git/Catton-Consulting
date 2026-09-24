"use client";

import { useEffect } from "react";

export function HomeMotion() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const menuBtn = document.getElementById("menuBtn");
    const form = document.getElementById("form");
    const year = document.getElementById("yr");
    const parallax = document.getElementById("parallax");
    if (!nav || !menuBtn || !form || !year) return;

    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const onMenu = () => {
      const open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    };
    menuBtn.addEventListener("click", onMenu);

    const links = Array.from(nav.querySelectorAll("ul a"));
    const close = () => nav.classList.remove("open");
    links.forEach((link) => link.addEventListener("click", close));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".rv, #burden").forEach((el) => io.observe(el));

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onParallax = () => {
      if (!parallax?.parentElement) return;
      const rect = parallax.parentElement.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        parallax.style.transform = `translateY(${rect.top * -0.12}px)`;
      }
    };
    if (!reduce && parallax) {
      window.addEventListener("scroll", onParallax, { passive: true });
    }

    const onSubmit = (event: Event) => {
      event.preventDefault();
      if (!(form instanceof HTMLFormElement)) return;
      const name = form.elements.namedItem("name");
      const email = form.elements.namedItem("email");
      if (!(name instanceof HTMLInputElement) || !(email instanceof HTMLInputElement)) return;
      if (!name.value || !email.value || !email.checkValidity()) {
        (name.value ? email : name).focus();
        return;
      }
      const sent = document.getElementById("sent");
      if (sent) sent.style.display = "block";
      const button = form.querySelector("button");
      if (button instanceof HTMLButtonElement) button.disabled = true;
    };
    form.addEventListener("submit", onSubmit);
    year.textContent = String(new Date().getFullYear());

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onParallax);
      menuBtn.removeEventListener("click", onMenu);
      links.forEach((link) => link.removeEventListener("click", close));
      form.removeEventListener("submit", onSubmit);
      io.disconnect();
    };
  }, []);

  return null;
}
