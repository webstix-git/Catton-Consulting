import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Catton Consulting collects, uses, protects and retains personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      eyebrow="Legal"
      title="Privacy Policy"
      lede="How Catton Consulting handles the personal information you share with us."
      ledeWidth={620}
      current="privacy"
    >
      <section>
        <h2>Overview</h2>
        <p>
          Catton Consulting respects your privacy. This policy explains what information we collect through our
          website and business communications, why we use it, and the choices available to you.
        </p>
      </section>
      <section>
        <h2>Information we collect</h2>
        <p>
          We may collect information you provide directly, including your name, company, email address, phone
          number, service interests and any message you submit through our contact form.
        </p>
        <p>
          Our website may also collect limited technical information such as browser type, device type, referring
          page and general website activity. We do not intentionally collect sensitive financial records through the
          public website.
        </p>
      </section>
      <section>
        <h2>How we use information</h2>
        <ul>
          <li>Respond to questions and consultation requests.</li>
          <li>Provide and improve our services.</li>
          <li>Maintain business records and protect our website.</li>
          <li>Meet legal, tax and regulatory obligations.</li>
        </ul>
      </section>
      <section>
        <h2>How information is shared</h2>
        <p>
          We do not sell personal information. We may share information with trusted service providers that support
          website hosting, communications, scheduling or business operations. We may also disclose information when
          required by law or when necessary to protect our rights, clients or systems.
        </p>
      </section>
      <section>
        <h2>Cookies and analytics</h2>
        <p>
          Our website may use essential cookies and privacy-conscious analytics to understand site performance. You
          can control cookies through your browser settings. Disabling cookies may affect some website features.
        </p>
      </section>
      <section>
        <h2>Data retention and security</h2>
        <p>
          We retain personal information only as long as reasonably needed for the purposes described in this policy
          or as required by law. We use reasonable administrative and technical safeguards, but no online system can
          guarantee absolute security.
        </p>
      </section>
      <section>
        <h2>Your choices</h2>
        <p>
          You may ask to access, correct or delete personal information you have provided, subject to legal and
          recordkeeping requirements. You may also ask us to stop nonessential communications.
        </p>
      </section>
      <section>
        <h2>Children&apos;s privacy</h2>
        <p>
          Our website and services are intended for businesses and adults. We do not knowingly collect personal
          information from children under 13.
        </p>
      </section>
      <section>
        <h2>Policy updates</h2>
        <p>
          We may update this policy as our practices or legal requirements change. The effective date at the top of
          this page shows the latest revision.
        </p>
      </section>
      <section>
        <h2>Contact us</h2>
        <p>
          For privacy questions or requests, email <a href="mailto:lisa@catton.com">lisa@catton.com</a> or call{" "}
          <a href="tel:+15074983086">507-498-3086</a>.
        </p>
      </section>
    </PolicyLayout>
  );
}
