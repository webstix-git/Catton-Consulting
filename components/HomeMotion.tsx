"use client";

import { useEffect } from "react";

export function HomeMotion() {
  useEffect(() => {
    const year = document.getElementById("yr");
    if (year) year.textContent = String(new Date().getFullYear());

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
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
