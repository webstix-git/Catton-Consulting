import type { Metadata } from "next";
import { Instrument_Sans, Manrope } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: {
    default: "Catton Consulting | Bookkeeping, Payroll & Financial Reporting",
    template: "%s | Catton Consulting",
  },
  description:
    "Catton Consulting handles bookkeeping, financial statements, AP/AR, reconciliations, payroll and sales tax so you can focus on the strategic decisions that grow your business.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
