"use client";

import { useEffect } from "react";

export function HomeMotion() {
  useEffect(() => {
    const form = document.getElementById("form");
    const year = document.getElementById("yr");
    const parallax = document.getElementById("parallax");
    if (!form || !year) return;

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
      window.removeEventListener("scroll", onParallax);
      form.removeEventListener("submit", onSubmit);
      io.disconnect();
    };
  }, []);

  return null;
}
